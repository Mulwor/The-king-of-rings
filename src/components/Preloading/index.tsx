import React from 'react';
import { LoadingType } from 'data/types';

function Preloader({ loading }: LoadingType) {
  return (
    <div>
      {!loading && (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default Preloader;
