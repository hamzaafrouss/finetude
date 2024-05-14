import { CREATE_CENTER, CREATE_CENTER_FAILED, CREATE_CENTER_SUCCESS, GET_ALL_CENTERS, GET_ALL_CENTERS_FAILED, GET_ALL_CENTERS_SUCCESS } from "./actions-definitions"

const INIT_STATE = {
    error: null,
    centers: [],
    isLoading: false
}

const CentersReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_CENTER: {
            return { ...state, isLoading: true, error: null }
        }
        case CREATE_CENTER_SUCCESS: {
            return { ...state, isLoading: false, centers: action.payload.centers }
        }
        case CREATE_CENTER_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }


        case GET_ALL_CENTERS: {
            return { ...state, isLoading: true, error: null }
        }
        case GET_ALL_CENTERS_SUCCESS: {
            return { ...state, isLoading: false, centers: action.payload }
        }
        case GET_ALL_CENTERS_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }


        default: {
            return { ...state }
        }
    }
}


export default CentersReducer