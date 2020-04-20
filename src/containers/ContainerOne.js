import React from 'react';
import './style.css';

const ContainerOne = props => {
  return (
    <div className="container">
      <h2>ContainerOne</h2>
      {window.location.href}
    </div>
  );
};

export default ContainerOne;
