import { CREATE_RESERVATION, CREATE_RESERVATION_FAILED, CREATE_RESERVATION_SUCCESS, DELETE_RESERVATION, DELETE_RESERVATION_FAILED, DELETE_RESERVATION_SUCCESS, EDIT_RESERVATION, EDIT_RESERVATION_FAILED, EDIT_RESERVATION_SUCCESS, GET_ALL_RESERVATIONS, GET_ALL_RESERVATIONS_FAILED, GET_ALL_RESERVATIONS_SUCCESS } from "./actions-definitions";

const INIT_STATE = {
    error: null,
    reservations: [],
    isLoading: false
}

const ReservationsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_RESERVATION: {
            return { ...state, isLoading: true, error: null }
        }
        case CREATE_RESERVATION_SUCCESS: {
            return { ...state, isLoading: false, reservations: [...state.reservations, action.payload.newReservation] }
        }
        case CREATE_RESERVATION_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }

        case EDIT_RESERVATION: {
            return { ...state, isLoading: true, error: null }
        }
        case EDIT_RESERVATION_SUCCESS: {
            return { ...state, isLoading: false, reservations: [...state.reservations.filter(r => r._id != action.payload.newReservation._id), action.payload.newReservation] }
        }
        case EDIT_RESERVATION_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }


        case GET_ALL_RESERVATIONS: {
            return { ...state, isLoading: true, error: null }
        }
        case GET_ALL_RESERVATIONS_SUCCESS: {
            return { ...state, isLoading: false, reservations: action.payload.reservations }
        }
        case GET_ALL_RESERVATIONS_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }

        case DELETE_RESERVATION: {
            return { ...state, isLoading: true, error: null }
        }
        case DELETE_RESERVATION_SUCCESS: {
            console.log('ssssss', action);
            return { ...state, isLoading: false, reservations: [...state.reservations.filter(r => r._id != action.payload.reservationId)] }
        }
        case DELETE_RESERVATION_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }

        default: {
            return { ...state }
        }
    }
}


export default ReservationsReducer