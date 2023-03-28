import React from 'react';

function UploadPhoto() {
  return (
    <div className="form-item">
      <label className="form-photo">
        Photo:
        <input type="file" className="photo" required />
      </label>
    </div>
  );
}

export default UploadPhoto;
