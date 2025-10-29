import axios from "axios";

// const SERVER_URL = 'http://localhost:3000'
const SERVER_URL = 'https://test-booking-system-server.onrender.com'

const axiosSendAPI = async (httpMethod, url, reqBody, reqHeader) => {

    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { 'Content-Type': 'application/json'}
    }

    return await axios(reqConfig)
    .then((res) => {
        return res
    })
    .catch(error => {
        return error
    })
}

export const addBookingAPI = async (reqBody, reqHeader) => {
    return await axiosSendAPI('POST', `${SERVER_URL}/add-booking`, reqBody, reqHeader)
}

export const editBookingAPI = async (reqBody, reqHeader) => {
    return await axiosSendAPI('PUT', `${SERVER_URL}/edit-booking`, reqBody, reqHeader)
}

export const getAllBookingAPI = async () => {
    return await axiosSendAPI('GET', `${SERVER_URL}/get-booking`, {})
}

// booking/delete/:id
export const deleteBookingAPI = async (id) => {
    return await axiosSendAPI('DELETE', `${SERVER_URL}/booking/delete/${id}`, {})
}