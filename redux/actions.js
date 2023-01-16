import axios from 'axios';
export const GET_TICKETS = 'GET_TICKETS';
const API_URL = 'https://127.0.0.1:3000/getTickets';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}`;

export const getTickets = () => {
  try {
    return async dispatch => {
      const res = await axios.get('https://application-mock-server.loca.lt/getTickets');
      if (res.data) {
        dispatch({
          type: GET_TICKETS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};