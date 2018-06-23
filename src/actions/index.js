//import fetch from 'isomorphic-fetch';
//Action constants
export const GET_REQUEST_WEATHER = 'GET_REQUEST_WEATHER';
export const GET_SUCCESS_WEATHER = 'GET_SUCCESS_WEATHER';
export const GET_FAILURE_WEATHER = 'GET_FAILURE_WEATHER';


//source constants
const SOURCE_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = '05a98cc115bcaa26eff6631d4ed1b98c';

// Action creators return a consistent "command" object.
export const getRequestWeather = () => ({
  type: GET_REQUEST_WEATHER
});
export const getSuccessWeather = (dataset) => {
  return {
    type: GET_SUCCESS_WEATHER,
    payload: { 
      dataset
    }
  };
};
export const getFailureWeather = err => ({
  type: GET_FAILURE_WEATHER,
  err
});

export const fetchWeatherData = place => dispatch => {
	dispatch(getRequestWeather())
  return fetch(`${SOURCE_URL}/weather?${place}&APPID=${API_KEY}&units=metric`)
    .then((response) => {
      
      
      if (response.json) {
        response.json().then((value) => {
          console.log("response value", value);
          dispatch(getSuccessWeather(value))
        })
        
      }
    })
   
};


export const GET_REQUEST_LOCATION = 'GET_REQUEST_LOCATION';
export const GET_SUCCESS_LOCATION = 'GET_SUCCESS_LOCATION';

export const getRequestLocation = () => ({
    type: GET_REQUEST_LOCATION
});

export const getSuccessLocation= (location) => {
  return {
    type: GET_SUCCESS_LOCATION,
    payload: {
      location
    }
  };
};

export function fetchUserLocation() {
  return function (dispatch) {
    
    if (navigator.geolocation) {      
      dispatch(getRequestLocation());
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('navigator.geolocation not supported by browser.');
    }

    function success(position){
      const { latitude, longitude } = position.coords;
      dispatch(getSuccessLocation({ latitude, longitude}));
    }

    function error(error){
      console.error(error);
    }
  } 
}
