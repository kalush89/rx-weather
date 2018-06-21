import { GET_REQUEST_LOCATION, GET_SUCCESS_LOCATION } from '../actions';

const initialState = {
  data: [],
  isFetching: true // Default to fetching..
  //: null
};

export default function location(state = initialState, action) {

  switch (action.type) {
    case GET_REQUEST_LOCATION:
      return {
        ...state,
        isFetching: true
      };
    case GET_SUCCESS_LOCATION:
    return {
        ...state,
        data: action.payload.location,
        isFetching: false

      };
    default:
      return state;

  }
}