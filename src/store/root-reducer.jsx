import { combineReducers } from 'redux';
import { countriesReducer } from './countries/countries-reducer';
import { themeReducer } from './theme/theme-reducer';
import { controlsReducer } from './controls/controls-reducer';
import { detailReducer } from './details/details-reducer';

export const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer,
	details: detailReducer,
});
