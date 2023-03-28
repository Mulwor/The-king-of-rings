import React from 'react';

function Email() {
  return (
    <div className="item">
      <label className="labels">
        Email:
        <input type="email" name="email" id="email" className="text email" />
      </label>
    </div>
  );
}

export default Email;
