import * as Actions from '../actions';

const initialState = {};

export default function location(state = initialState, action) {

  switch (action.type) {
    case Actions.GET_REQUEST_LOCATION:
      return {
        ...state,
        isFetching: true
      };
    case Actions.GET_SUCCESS_LOCATION:
    return {
        ...state,
        data: action.payload.location,
        isFetching: false

      };
    default:
      return state;

  }
}