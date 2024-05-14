// ModalForme2.js
import React, { useState, useEffect } from 'react';
import './ModalForm2.css';
import { useDispatch, useSelector } from 'react-redux';
import { createFormation } from '../../Store/Formations/actions';
import { getAllCenters } from '../../Store/Centers/actions';

const ModalForme2 = ({ open, onClose }) => {
  const { centers } = useSelector(state => state.CentersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCenters())
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    startDate: '',
    endDate: '',
    maxPlace: '',
    center: '',
  });



  const closeModal = () => {
    onClose(false);
    setFormData({
      name: '',
      price: '',
      description: '',
      startDate: '',
      endDate: '',
      maxPlace: '',
      center: '',
    });
  };


  const [centerOptions, setCenterOptions] = useState([]); // State to store the fetched center options

  useEffect(() => {
    fetch("/get-center")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched center options:', data);
        setCenterOptions(data.centers);
      })
      .catch(error => console.error('Error fetching center options:', error));
  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };


  const handleAddClick = () => {
    const { name, price, description, startDate, endDate, maxPlace, center } = formData;

    if (name && price && description && startDate && endDate && maxPlace && center) {
      dispatch(createFormation({ name, price, description, startDate, endDate, maxPlace, center }))
      // Close the modal
      closeModal();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
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

              <label htmlFor="name">price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="name">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="name">startDate:</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="name">endDate:</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="name">maxPlace:</label>
              <input
                type="number"
                id="maxPlace"
                name="maxPlace"
                value={formData.maxPlace}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="center">Center:</label>
              <select
                id="center"
                name="center"
                value={formData.center || ''}
                onChange={handleInputChange}
                required
              >
                <option value={null} onChange={handleInputChange} disabled>Select a center</option>
                {centers.map(center => (
                  <option key={center._id} value={center._id}>
                    {center.name}
                  </option>
                ))}
              </select>




              <button type="button" onClick={handleAddClick}>Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForme2;
