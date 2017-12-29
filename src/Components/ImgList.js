import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = props => {

	const results = props.images;
  let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<Img
				img={img}
				url={img.urls.thumb}
        user={img.user.links.html}
        name={img.user.name}
        link={img.links.html}
        key={img.id}
				select={props.select}
			/>
		);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ImgList;
