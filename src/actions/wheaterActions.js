import WeatherRepository from '../services/ApiOpenWeather';

export const DATA_WEATHER_BEGIN = 'DATA_WEATHER_BEGIN';
export const DATA_WEATHER_SUCCESS = 'DATA_WEATHER_SUCCESS';
export const DATA_WEATHER_FAILURE = 'DATA_WEATHER_FAILURE';
export const CLEAR_DATA_WEATHER = 'CLEAR_DATA_WEATHER';

export function getWeatherData(data) {
    const ApiOpenWeather = new WeatherRepository()
	return async dispatch => {
		dispatch(dataWeatherBegin());
		await ApiOpenWeather.getWeather(data)
			.then(
				result => {
					dispatch(dataWeatherSuccess(result));
				},
				error => {
					dispatch(dataWeatherError());
				}
			)
	};
}

export const dataWeatherBegin = () => ({
	type: DATA_WEATHER_BEGIN
});
export const dataWeatherSuccess = data => ({
	type: DATA_WEATHER_SUCCESS,
	payload: data 
});
export const dataWeatherError = () => ({
	type: DATA_WEATHER_FAILURE,
});
export const clearDataWeather = () => ({
	type: CLEAR_DATA_WEATHER,
});