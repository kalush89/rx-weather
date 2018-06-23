import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../../actions';
import TheCity from '../location';
import WeatherIcon from 'react-icons-weather';
//import Conditions from '../conditions';
import Temp from '../temperature';
import Loading from '../loading/loading';


class Weather extends Component {

  componentWillUpdate(nextProps, nextState) {
  
   if (this.props.location !== nextProps.location) {
      const { latitude, longitude } = nextProps.location.data;
      // Update weather with new coordinates
      this.updateWeather(`lat=${latitude}&lon=${longitude}`);
    }
  }

  updateWeather(place) {
    // Fetch weather data from API
    this.props.dispatch(fetchWeatherData(place));
    //this.props.dispatch(fetchForecast(params));

  }

 
  render() {


   
    const { isFetching, weather } = this.props;
    //console.log('view this',Object.keys(weather.weatherData));
    if (weather.err) {
      return (
        <p>Failed to get data: {weather.err}</p>
      );
    }


    if (!weather.weatherData || isFetching) {
      return (
        <Loading />
      );
    }

    return (

      <div className="Weather">
        <TheCity city={weather.weatherData.name} />
        <WeatherIcon name='owm'  iconId={weather.weatherData.weather[0].id} className='icon' fixedWidth={true} />
        <Temp temperature={weather.weatherData.main.temp} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { location, weather } = state;
  
  return {
    location,
    weather
  };
};

Weather = connect(mapStateToProps)(Weather);
export default Weather;
