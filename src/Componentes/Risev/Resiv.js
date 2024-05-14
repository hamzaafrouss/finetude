import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Resiv.css';
import ReserveModal from '../Form/ReserveModal';
import { getAllReservations } from '../../Store/Reservation/actions';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { deleteReservation } from '../../Store/Reservation/actions-definitions';
import { Backdrop } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CircularProgress from '@mui/material/CircularProgress';



function ResivForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModalConfirmDelete, setOpenModalCOnfirmDelete] = useState(false)
  const { reservations, isLoading } = useSelector(state => state.ReservationsReducer)
  const [selectedReservation, setSelectedReservation] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllReservations())
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };



  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="container">
        <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Forme reservation</h1>

        {isModalOpen && <ReserveModal 
            selectedReservation={selectedReservation} 
            type = "edit"
            onClose={() => setIsModalOpen(false)} 
            open={isModalOpen} 
        />}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">lastname</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">Formation</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              reservations?.length == 0 && <tr>
                <td colspan="7">
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <TravelExploreIcon style={{ fontSize: "90px", color: "#CCC" }} />
                    <p>There is no reservation.</p>
                  </div>
                </td>
              </tr>
            }
            {reservations?.map((item, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.formation?.name}</td>
                  <td >
                    <button onClick={() => {
                      setIsModalOpen(true);
                      setSelectedReservation(item)
                    }}>Edit</button>
                    <button onClick={() => {
                      setSelectedReservation(item)
                      setOpenModalCOnfirmDelete(true)
                    }}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div >
      {openModalConfirmDelete && <ConfirmationModal
        text="Are you sure you want to delete this reservation?"
        confirmText="Delete"
        type="warning"
        onCancel={() => {
          setOpenModalCOnfirmDelete(false)
          setSelectedReservation(null)
        }}
        onConfirm={() => {
          setOpenModalCOnfirmDelete(false)
          dispatch(deleteReservation({ reservationId: selectedReservation?._id }))
        }}
      />
      }
    </>
  );
};

export default ResivForm;
