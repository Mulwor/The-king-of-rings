import React from 'react';

function Country() {
  return (
    <div>
      <label className="country">
        Where are you from:
        <select className="choose" required>
          <option value="Denmark">Denmark</option>
          <option value="Russia">Russia</option>
          <option value="England">England</option>
          <option value="Wales">Wales </option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Belarus">Belarus</option>
          <option value="Germany">Germany</option>
          <option value="Belgium">Belgium</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Albania">Albania</option>
          <option value="Portugal">Portugal</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Greece">Greece</option>
          <option value="Serbia">Serbia</option>
        </select>
      </label>
    </div>
  );
}

export default Country;
