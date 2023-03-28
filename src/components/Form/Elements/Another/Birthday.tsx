import React from 'react';

function Birthday() {
  return (
    <div className="form-item">
      <label>
        Your birthday in:
        <input type="date" className="data" required />
      </label>
    </div>
  );
}

export default Birthday;
