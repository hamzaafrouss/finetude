import React, { useEffect, useState } from 'react';
import './ReserveModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_RESERVATION, createReservation, editReservation } from '../../Store/Reservation/actions-definitions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getAllFormations } from '../../Store/Formations/actions';


const ReserveModal = ({ type = "add", selectedReservation = null, open, onClose, selectedFormation }) => {
  const { formations } = useSelector(state => state.FormationsReducer)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    formation: null
  });

  useEffect(() => {
    dispatch(getAllFormations());
  }, []);

  useEffect(() => {
    if (selectedReservation == null) return

    setFormData({
      id: selectedReservation?._id,
      name: selectedReservation?.name,
      lastname: selectedReservation?.lastname,
      email: selectedReservation?.email,
      phone: '' + selectedReservation?.phone,
      formation: selectedReservation?.formation?._id,

    })
  }, [selectedReservation])

  const closeModal = () => {
    onClose(false);
    setFormData({
      id: null,
      name: '',
      lastname: '',
      email: '',
      phone: '',
      formation: ''
    });
  };

  const handleInputChange = (prop, value) => {
    setFormData((prevData) => ({ ...prevData, [prop]: value }));
  };

  const handleAddClick = () => {
    const { name, lastname, email, phone, } = formData;

    console.log(formData);

    if (name && lastname && email && phone) {
      dispatch(createReservation({ formData: { ...formData, formation: selectedFormation } }));
      closeModal();
    } else {
      alert('Please fill in all fields.');
    }
  };


  const handleEditClick = () => {
    const { name, lastname, email, phone } = formData;

    if (name && lastname && email && phone) {
      dispatch(editReservation({ formData: { ...formData } }));
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
            {type === "add" &&
              <p style={{ fontSize: "24px" }}>Formation : {formations?.find(f => f._id === selectedFormation)?.name}</p>}
            <form>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: "10px" }}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastname">lastname:</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={(e) => handleInputChange("lastname", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">phone</label>

                <PhoneInput
                  name='phone'
                  containerStyle={{ width: "100%", height: "43px" }}
                  inputStyle={{ width: "100%", height: "100%" }}
                  country={'ma'}
                  value={formData.phone}
                  onChange={(phone) => handleInputChange("phone", phone)}

                />
              </div>

              {type == "edit" && <div>
                <label htmlFor="phone">Formation</label>
                <select
                  id="center"
                  name="center"
                  value={formData.formation}
                  onChange={(e) => handleInputChange("formation", e.target.value)}
                  required
                >
                  {formations.map(f => (
                    <option key={f._id} value={f._id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
              }
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {type == "add" && <button type="button" onClick={handleAddClick}>Add</button>}
                {type == "edit" && <button type="button" onClick={handleEditClick}>Edit</button>}
              </div>
            </form>
          </div>
        </div>
      )}
    </>

  );
};

export default ReserveModal;
