import React, { useState, useEffect } from 'react';

function ModalForm({ center, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (center) {
      setName(center.name);
      setAddress(center.address);
    } else {
      setName('');
      setAddress('');
    }
  }, [center]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCenter = { ...center, name, address };
    console.log("Submitting updated center:", updatedCenter);
    onSubmit(updatedCenter);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{center ? 'Edit Center' : 'Add Center'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <label>Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
          <button type="submit">{center ? 'Update' : 'Add'}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
