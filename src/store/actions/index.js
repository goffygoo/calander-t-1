import axios from "axios"

export const dataInit = () => dispatch => {
    axios.get('https://agile-reef-25893.herokuapp.com/getall').then(res => {
        const all = res.data || []

        dispatch({
            type: "ADD_ALL",
            payload: all
        })
    }).catch(err => {
        console.log(err)
    })
};

export const addAppointment = appointmentData => dispatch => {
    axios.post('https://agile-reef-25893.herokuapp.com/add', {
        meta: appointmentData
    }).then(_data => {
        dispatch({
            type: "ADD_APPOINTMENT",
            payload: appointmentData
        })
    }).catch(err => {
        console.log(err)
    })
}

