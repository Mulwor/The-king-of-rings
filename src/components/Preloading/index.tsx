import React from 'react';
import { TLoading } from 'data/types';

function Preloader({ loading }: TLoading) {
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
