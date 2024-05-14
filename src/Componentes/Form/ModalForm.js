import React, { useState } from 'react';
import './ModalForm.css';
import { useDispatch } from 'react-redux';
import { createCenter } from '../../Store/Centers/actions';

const ModalForm = ({ open, onClose }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
  });

  const closeModal = () => {
    onClose(false);
    setFormData({
      name: '',
      address: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddClick = () => {

    const { name, address } = formData;

    if (name && address) {

      dispatch(createCenter({name, address}))

      // Close the modal
      closeModal();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <button type="button" onClick={handleAddClick}>Add</button>
            </form>
          </div>
        </div>
      )}
    </>

  );
};

export default ModalForm;
