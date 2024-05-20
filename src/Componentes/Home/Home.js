
import React, { useEffect, useState } from 'react';
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

  const filtredFormations = (allFormations) => {
    if (!allFormations && allFormations.length <= 0) {
        return []
    }
    return allFormations.filter(formation => formation.status === 'active');
}

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
  const format = (date) => {
    if (!date) return ''
    const title = new Date(date).toLocaleDateString('fr-FR')
    const sTitle = title.split('/')
    const month = parseInt(sTitle[1]) - 1
    const monthNames = ["Janvier", "février", "mars", "avril", "mai", "juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return sTitle[0] + " " + monthNames[month] + " " + sTitle[2]
}

  return (
    <div>
      <h1 className='titel'>Platform De Gestion De Reservation<br /> Pour Les Centre De Formation</h1>
      <div className="container">
        <div className="card-container">
          {filtredFormations(formations).map(f => (
            <div className="card">
              <h2>{f.name}</h2>
              <h2>price: {f.price} $</h2>
              <h7>{f.description}</h7>
              <h2>startDate: {format(f.startDate)}</h2>
              <h2>EndDate: {format(f.endDate)}</h2>
              <h2>MaxPlace:  {f.maxPlace}</h2>
              <h2>Center: {centers?.find(c => c._id == f.center)}</h2>
              {
                f.numCond >= f.maxPlace ? (
                  <span style={{ color: 'red', textAlign: 'center', display: 'block' }}>completed</span>
                ) : (
                  <button onClick={() => openModal(f._id)}>Reserve</button>
                )
              }
              
              
              {isModalOpen && <ReserveModal selectedFormation={selectedFormation} onClose={() => setIsModalOpen(false)} open={isModalOpen} />}
            </div>
          ))
          }

        </div>
      </div>
    </div>
  )
}