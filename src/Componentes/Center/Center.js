import React, { useEffect, useState } from 'react';
import './Center.css';
import ModalForm from '../Form/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCenters, editCenter } from '../../Store/Centers/actions';

function Center() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const { centers } = useSelector(state => state.CentersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCenters());
  }, [dispatch]);

  useEffect(() => {
    console.log("centers", centers);
  }, [centers]);

  const openModal = (center) => {
    setSelectedCenter(center);
    setIsModalOpen(true);
  };

  const handleEditSubmit = (updatedCenter) => {
    dispatch(editCenter(updatedCenter));
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Forme Center</h1>
      <button onClick={() => openModal(null)}>Add</button>

      {isModalOpen && (
        <ModalForm 
          center={selectedCenter} 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleEditSubmit} 
        />
      )}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {centers?.map((item, id) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => openModal(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Center;
