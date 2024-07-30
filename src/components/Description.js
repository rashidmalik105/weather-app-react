import React from 'react';

const Description = ({ weather }) => {
  return (
    <div className="description">
      {weather ? <p>{weather[0].main}</p> : null}
    </div>
  );
};

export default Description;
