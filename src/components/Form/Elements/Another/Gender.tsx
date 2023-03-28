import React from 'react';

function Gender() {
  return (
    <label>
      Your gender:
      <select className="gender" required>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="It">It</option>
      </select>
    </label>
  );
}

export default Gender;
