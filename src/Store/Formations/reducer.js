import { CREATE_FORMATION, CREATE_FORMATION_FAILED, CREATE_FORMATION_SUCCESS, GET_ALL_FORMATIONS, GET_ALL_FORMATIONS_FAILED, GET_ALL_FORMATIONS_SUCCESS,SET_FORMATION_ARCHIVED, SET_ARCHIVED_FAILED, SET_ARCHIVED_SUCCESS } from "./actions-definitions"

const INIT_STATE = {
    error: null,
    formations: [],
    isLoading: false
}

const FormationsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_FORMATION: {
            return { ...state, isLoading: true, error: null }
        }
        case CREATE_FORMATION_SUCCESS: {
            return { ...state, isLoading: false, formations: action.payload.formations }
        }
        case CREATE_FORMATION_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }
        case SET_FORMATION_ARCHIVED: {
            return { ...state, isLoading: false, error: action.payload }
        }
        case SET_ARCHIVED_SUCCESS: {
            return { ...state, isLoading: false, error: action.payload }
        }
        case SET_ARCHIVED_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }


        case GET_ALL_FORMATIONS: {
            return { ...state, isLoading: true, error: null }
        }
        case GET_ALL_FORMATIONS_SUCCESS: {
            return { ...state, isLoading: false, formations: action.payload }
        }
        case GET_ALL_FORMATIONS_FAILED: {
            return { ...state, isLoading: false, error: action.payload }
        }
        


        default: {
            return { ...state }
        }
    }
}


export default FormationsReducer