import React, { Component } from 'react';

export default class Img extends Component {

  handleClick = e => {
    this.props.select(this.props.img);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.handleClick}>
          <img src={this.props.url} alt="Unsplash Image here"/>
        </a>
        <p>
          Photo by
          <a href={this.props.user}>{this.props.name}</a>
          <a href={this.props.link}> See on Unsplash</a>
        </p>
      </li>
    );
  };
}
