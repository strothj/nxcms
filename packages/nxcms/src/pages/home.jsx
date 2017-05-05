import React from 'react';

const tempImgs = [];

for (let i = 0; i < 1; i += 1)
  tempImgs.push(
    <img
      key={99 - i}
      src="https://placekitten.com/350/350"
      alt="placeholder"
    />,
    <br key={i} />,
  );

const HomePage = <div>{tempImgs}</div>;

export default HomePage;
