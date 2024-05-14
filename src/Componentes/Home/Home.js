
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DetailForm from '../Detail/DetailForm';
import ReserveModal from '../Form/ReserveModal';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFormations } from '../../Store/Formations/actions';
import { getAllCenters } from '../../Store/Centers/actions';


export default function Home() {
  const { formations } = useSelector(state => state.FormationsReducer)
  const { centers } = useSelector(state => state.CentersReducer)
  const [selectedFormation, setSelectedFormation] = useState(null)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCenters())
    dispatch(getAllFormations())
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = (formationId) => {
    setSelectedFormation(formationId)
    console.log("====", formationId)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReserve = (reservationDetails) => {

    console.log('Reservation Details:', reservationDetails);
  };

  return (
    <div>
      <h1 className='titel'>Platform De Gestion De Reservation<br /> Pour Les Centre De Formation</h1>
      <div className="container">
        <div className="card-container">
          {formations?.map(f => (
            <div className="card">
              <h2>{f.name}</h2>
              <h2>price: {f.price} $</h2>
              <h7>{f.description}</h7>
              <h2>startDate: {f.startDate}</h2>
              <h2>EndDate: {f.endDate}</h2>
              <h2>MaxPlace:  {f.maxPlace}</h2>
              <h2>Center: {centers?.find(c => c._id == f.center)}</h2>
              <button onClick={() => { openModal(f._id) }}>Reserve</button>
              {isModalOpen && <ReserveModal selectedFormation={selectedFormation} onClose={() => setIsModalOpen(false)} open={isModalOpen} />}
            </div>
          ))
          }

        </div>
      </div>
    </div>
  )
}