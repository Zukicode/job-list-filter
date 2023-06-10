import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import jobsSlice from './slices/jobsSlice';

export const store = configureStore({
	reducer: {
		jobs: jobsSlice,
		filter: filterSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
