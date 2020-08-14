import React from 'react';
import logo from "../photo-gallery.png";

const Title = () => {
  return (
    <div className="title">
      <img src={logo} alt="" />
      <h2>Picture Library</h2>
      <p>Discover all the beauty life has to offer.</p>
    </div>
  );
}

export default Title;