import React from 'react';
import Img from './Img';

const FeatureImg = props =>
  <Img
    url={props.img.urls.thumb}
    user={props.img.user.links.html}
    name={props.img.user.name}
    link={props.img.links.html}
    key={props.img.id}
  />;

export default FeatureImg;
