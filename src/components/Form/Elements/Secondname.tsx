import React from 'react';

function Secondname() {
  return (
    <div className="item">
      <label className="labels">
        Secondname:
        <input type="text" id="surname" className="text secondname" required />
      </label>
    </div>
  );
}

export default Secondname;
