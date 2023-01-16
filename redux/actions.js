import axios from "axios";
export const GET_TICKETS = 'GET_TICKETS';
const API_URL = 'http://localhost:3000/getTickets';
const BASE_URL = `${API_URL}`;

const config = {
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
  };

export const getTickets = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`)//,config);
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(res.data);
        //if (res.data) {
        //  dispatch({
        //    type: GET_TICKETS,
        //    payload: res.data,

        //  });
        //} else {
        //  console.log('Unable to fetch');
        //}
      };
    } catch (error) {
      // Add custom logic to handle errors
    }
  };