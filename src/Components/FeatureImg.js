import React from 'react';
import Img from './Img';
import '../css/featureImg.css';

const FeatureImg = props =>
  <ul className="feature-image">
    <Img
      url={props.img.urls.full}
      user={props.img.user.links.html}
      name={props.img.user.name}
      link={props.img.links.html}
      key={props.img.id}
    />
  </ul>;

export default FeatureImg;
