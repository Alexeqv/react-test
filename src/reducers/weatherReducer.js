import {
	DATA_WEATHER_BEGIN,
	DATA_WEATHER_SUCCESS,
	DATA_WEATHER_FAILURE,
	CLEAR_DATA_WEATHER
} from '../actions/wheaterActions';

const initialState = {
	data: [],
	isLoading: false,
	error: '' 
};

export default function WeatherReducer (state = initialState, action) {
	switch (action.type) {
		case DATA_WEATHER_BEGIN:
			return {
				...state,
				isLoading: true
			}
		case DATA_WEATHER_SUCCESS:
			let data = action.payload;
			return {
				...state,
				data, 
				isLoading: false,
			}

		case DATA_WEATHER_FAILURE:
			return {
				...state,
				isLoading: false
			}
		case CLEAR_DATA_WEATHER:
			return {
				...state,
				data: {},
				isLoading: false
			}
		default:
			return state;
	}
				
};

export const getIsLoading = state => {
	return state.isLoading
}

export const getWeatherData = state => {
	return state.data

}

export const getError = state => {
	return state.error;
}