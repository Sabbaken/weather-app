import {WEATHER_BIT_KEY, WEATHER_BIT_URL} from "../constants";
import axios from 'axios'

export const fetchCityWeather = (cityName) => {
    return function (dispatch) {
        axios.get(WEATHER_BIT_URL + `?city=${cityName}&key=${WEATHER_BIT_KEY}`)
            .then(res => {
                // console.log(res.data.data)
                dispatch(fetchCityWeatherSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchCityWeatherFailure());
            })
    }
}

export const fetchCityWeatherSuccess = (forecast) => {
    return {
        type: 'DISPLAY_CITY_WEATHER',
        payload: {
            forecast: forecast
        }
    }
}

export const fetchCityWeatherFailure = () => {
    return {
        type: 'ERROR_CITY_NOT_FOUND',
        payload: {}
    }
}