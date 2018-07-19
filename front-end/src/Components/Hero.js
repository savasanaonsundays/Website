import React from 'react';
import hero from '../Assets/social/hero.jpg';
import './hero.css';

export default props => {
  return <div className="herobox">{props.children}</div>;
};
