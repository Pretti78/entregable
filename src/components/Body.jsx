import React from 'react';

const Body = () => {
	const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F'];
	const randomColor = Math.floor(Math.random() * colors.length);
	document.body.style = `background: ${colors[randomColor]}`;

	return <div></div>;
};

export default Body;
