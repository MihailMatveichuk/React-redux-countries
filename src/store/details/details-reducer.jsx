import {
	CLEAR_DETAILS,
	SET_COUNTRY,
	SET_ERROR,
	SET_LOADING,
} from './details-actions';

const initialState = {
	currentCountry: '',
	status: 'idle',
	error: null,
};

export const detailReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				error: null,
				status: 'loading',
			};
		case SET_ERROR:
			return {
				...state,
				error: payload,
				status: 'rejected',
			};
		case CLEAR_DETAILS:
			return initialState;
		case SET_COUNTRY:
			return {
				...state,
				currentCountry: payload,
				status: 'received',
			};
		default:
			return state;
	}
};
