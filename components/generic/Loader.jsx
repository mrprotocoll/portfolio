import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <BeatLoader
      color="#189ab4"
      size={30}
    />
  </div>
);

export default Loader;
