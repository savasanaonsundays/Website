import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import facebook from '../Assets/social/facebook.png';
import instagram from '../Assets/social/instagram.png';
import gmail from '../Assets/social/gmail.png';

export default () => {
  return (
    <div>
      <footer className="navbar bottom bg-dark text-white p-9 text-center custombar">
        <a href="https://www.facebook.com/savasanaonsundays/" target="_blank">
          <img className="socialimg" src={facebook} />
        </a>
        <a href="https://www.instagram.com/savasanaonsundays/" target="_blank">
          <img className="socialimg" src={instagram} />
        </a>
        <Link to="../">
          <img className="socialimg" src={gmail} />
        </Link>
      </footer>
    </div>
  );
};
