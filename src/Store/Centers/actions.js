import { 
    CREATE_CENTER, CREATE_CENTER_FAILED, CREATE_CENTER_SUCCESS, 
    GET_ALL_CENTERS, GET_ALL_CENTERS_FAILED, GET_ALL_CENTERS_SUCCESS,
    EDIT_CENTER, EDIT_CENTER_SUCCESS, EDIT_CENTER_FAILED
} from "./actions-definitions";

export const createCenter = (data) => {
    console.log("=======>", data);
    return {
        type: CREATE_CENTER,
        payload: { data }
    };
};

export const createCenterSuccess = (centers) => ({
    type: CREATE_CENTER_SUCCESS,
    payload: centers
});

export const createCenterFailed = (error) => ({
    type: CREATE_CENTER_FAILED,
    payload: error
});

export const getAllCenters = () => ({
    type: GET_ALL_CENTERS,
    payload: null
});

export const getAllCentersSuccess = ({ centers }) => {
    return {
        type: GET_ALL_CENTERS_SUCCESS,
        payload: centers
    };
};

export const getAllCentersFailed = (error) => ({
    type: GET_ALL_CENTERS_FAILED,
    payload: error
});

export const editCenter = (formData) => ({
    type: EDIT_CENTER,
    payload: { formData }
});

export const editCenterSuccess = (newCenter) => ({
    type: EDIT_CENTER_SUCCESS,
    payload: { newCenter }
});

export const editCenterFailed = (error) => ({
    type: EDIT_CENTER_FAILED,
    payload: error
});
