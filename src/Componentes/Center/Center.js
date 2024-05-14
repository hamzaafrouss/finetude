import React, { useEffect, useState } from 'react';
import './Center.css';
import ModalForm from '../Form/ModalForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCenters } from '../../Store/Centers/actions';


function Center() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { centers } = useSelector(state => state.CentersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCenters())
  }, [])

  useEffect(() => {
    console.log("centers", centers)
  }, [centers])

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Forme Center</h1>
      <button onClick={openModal}>Add</button>

      {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} open={isModalOpen} />}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {centers?.map((item, id) => {
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td >
                  <button>Edit</button>
                  <button>Archive</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Center;
