import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './actions';

export default configureStore({
	reducer: {
		portfolio: portfolioReducer,
	},
});
