import { combineReducers } from 'redux';
import Weather, * as fromWeatherReducer from '../reducers/weatherReducer';

const rootReducer = combineReducers({
    Weather
})

export default rootReducer;

export const getWeather = state => fromWeatherReducer.getWeatherData(state.Weather);
export const getError = state => fromWeatherReducer.getError(state.Weather);
export const getIsLoading = state => fromWeatherReducer.getIsLoading(state.Weather)