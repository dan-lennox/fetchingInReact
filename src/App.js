import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './css/featureArea.css';

import FeatureImg from './Components/FeatureImg';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true,
			featureImg: '',
      query: 'sun'
		};
	}

	componentDidMount() {
		this.performSearch();
	}

  selectImg = (img) => {
    this.setState({
      featureImg: img
    });
  };

	randomImage = (query = 'sun') => {
    axios
      .get(
        `https://api.unsplash.com/photos/random/?query=${query}&orientation=portrait&client_id=${process.env.APP_ID}`
      )
      .then(data => {
        console.log('data: ', data);
        this.setState({
          featureImg: data.data
        });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  };

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${process.env.APP_ID}`
			)
			.then(data => {
				this.setState({
					imgs: data.data.results,
					loadingState: false,
					featureImg: data.data.results[0],
          query: query,
				});
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
      <MuiThemeProvider>
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">GFH Unsplash Testing</h1>
              <RaisedButton className="random-image-button" label="Load random image" primary={true} onClick={() => this.randomImage(this.state.query)} />
              <SearchForm onSearch={this.performSearch} />
            </div>
          </div>
          <div className="feature-area">
            { (this.state.loadingState) ? null : <FeatureImg img={this.state.featureImg}/> }
            <img className="content-demo" src={'./content-demo.png'} alt="content demo" />
          </div>
          <div className="main-content">
            {this.state.loadingState
              ? <p>Loading</p>
              : <ImgList images={this.state.imgs} select={this.selectImg} />}
          </div>
        </div>
      </MuiThemeProvider>
		);
	}
}
