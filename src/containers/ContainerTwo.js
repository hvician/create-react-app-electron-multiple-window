import React from 'react';
import './style.css';

const ContainerTwo = props => {
  return (
    <div className="container">
      <h2>ContainerTwo</h2>
      {window.location.href}
    </div>
  );
};

export default ContainerTwo;
