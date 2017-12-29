import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FeatureImg from './Components/FeatureImg';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
import cred from './cred.js';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true,
			featureImg: ''
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

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}`
			)
			.then(data => {
				this.setState({
					imgs: data.data.results,
					loadingState: false,
					featureImg: data.data.results[0]
				});
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <div><FeatureImg img={ this.state.featureImg}/><ImgList images={this.state.imgs} select={this.selectImg} /></div>}
				</div>
			</div>
		);
	}
}
