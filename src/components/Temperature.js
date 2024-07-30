import React from 'react';

const Temperature = ({ temp }) => {
  return (
    <div className="temp">
      {temp ? <h1>{temp.toFixed()}°F</h1> : null}
    </div>
  );
};

export default Temperature;
