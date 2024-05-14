// actions-definitions.js

export const CREATE_RESERVATION = "CREATE_RESERVATION";
export const CREATE_RESERVATION_SUCCESS = "CREATE_RESERVATION_SUCCESS";
export const CREATE_RESERVATION_FAILED = "CREATE_RESERVATION_FAILED";

export const EDIT_RESERVATION = "EDIT_RESERVATION";
export const EDIT_RESERVATION_SUCCESS = "EDIT_RESERVATION_SUCCESS";
export const EDIT_RESERVATION_FAILED = "EDIT_RESERVATION_FAILED";

export const GET_ALL_RESERVATIONS = "GET_ALL_RESERVATIONS";
export const GET_ALL_RESERVATIONS_SUCCESS = "GET_ALL_RESERVATIONS_SUCCESS";
export const GET_ALL_RESERVATIONS_FAILED = "GET_ALL_RESERVATIONS_FAILED";

export const DELETE_RESERVATION = "DELETE_RESERVATION";
export const DELETE_RESERVATION_SUCCESS = "DELETE_RESERVATION_SUCCESS";
export const DELETE_RESERVATION_FAILED = "DELETE_RESERVATION_FAILED";

// Action creator functions
export const createReservation = ({ formData }) => ({
  type: CREATE_RESERVATION,
  payload: { formData },
});

export const createReservationSuccess = (data) => ({
  type: CREATE_RESERVATION_SUCCESS,
  payload: data,
});

export const createReservationFailed = (error) => ({
  type: CREATE_RESERVATION_FAILED,
  payload: error,
});

export const editReservation = ({ formData }) => ({
  type: EDIT_RESERVATION,
  payload: { formData },
});

export const editReservationSuccess = (data) => ({
  type: EDIT_RESERVATION_SUCCESS,
  payload: data,
});

export const editReservationFailed = (error) => ({
  type: EDIT_RESERVATION_FAILED,
  payload: error,
});

export const getAllReservations = () => ({
  type: GET_ALL_RESERVATIONS,
});

export const getAllReservationsSuccess = (data) => ({
  type: GET_ALL_RESERVATIONS_SUCCESS,
  payload: data,
});

export const getAllReservationsFailed = (error) => ({
  type: GET_ALL_RESERVATIONS_FAILED,
  payload: error,
});

export const deleteReservation = ({ reservationId }) => {
  console.log("action", reservationId)
  return ({
    type: DELETE_RESERVATION,
    payload: { reservationId },
  })
};

export const deleteReservationSuccess = (reservationId) => ({
  type: DELETE_RESERVATION_SUCCESS,
  payload: { reservationId },
});

export const deleteReservationFailed = (error) => ({
  type: DELETE_RESERVATION_FAILED,
  payload: error,
});