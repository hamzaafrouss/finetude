import axios from "axios"

export const createReservationService = async ({ formData }) => {
    console.log('service', formData)
    return axios.post(`${process.env.REACT_APP_API_BASE_LINK}/reservations/create-reservation`, { formData }).then(res => {
        return res.data
    })
}

export const editReservationService = async ({ formData }) => {
    return axios.post(`${process.env.REACT_APP_API_BASE_LINK}/reservations/edit-reservation`, { formData }).then(res => {
        return res.data
    })
}

export const deleteReservationService = async ({ reservationId }) => {
    console.log("service", reservationId)
    return axios.post(`${process.env.REACT_APP_API_BASE_LINK}/reservations/detele-reservation`, { reservationId }).then(res => {
        return res.data
    })
}

export const getAllReservationsService = async () => {
    return axios.get(`${process.env.REACT_APP_API_BASE_LINK}/reservations`).then(res => res.data)
}