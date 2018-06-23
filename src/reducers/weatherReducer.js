import * as Actions from '../actions';

const initialState = {
 
 //data: [],
  isFetching: true, // Default to fetching..
  error: null
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_REQUEST_WEATHER:
     return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_SUCCESS_WEATHER:
     return {
         ...state,
        weatherData: action.payload.dataset,
        isFetching: false
      };
    case Actions.GET_FAILURE_WEATHER:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}