import { CREATE_RESERVATION, CREATE_RESERVATION_FAILED, CREATE_RESERVATION_SUCCESS, GET_ALL_RESERVATIONS, GET_ALL_RESERVATIONS_FAILED, GET_ALL_RESERVATIONS_SUCCESS } from "./actions-definitions";

export const createReservation = ({ fornData }) => {
    console.log("saga", fornData)
    return ({
        type: CREATE_RESERVATION,
        payload: { fornData }
    })
}

export const createReservationSuccess = ({ newReservation }) => ({
    type: CREATE_RESERVATION_SUCCESS,
    payload: { newReservation }
})

export const createReservationFailed = (error) => ({
    type: CREATE_RESERVATION_FAILED,
    payload: error
})


export const getAllReservations = () => ({
    type: GET_ALL_RESERVATIONS,
    payload: null
})

export const getAllReservationSuccess = (reservations) => {
    return ({
        type: GET_ALL_RESERVATIONS_SUCCESS,
        payload: {reservations}
    })
}

export const getAllReservationsFailed = (error) => ({
    type: GET_ALL_RESERVATIONS_FAILED,
    payload: error
})