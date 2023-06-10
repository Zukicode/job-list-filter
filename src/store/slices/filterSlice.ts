import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface filterState {
	allFilters: string[];
	activeFilters: string[];
}

const initialState: filterState = {
	allFilters: [
		'Frontend',
		'Senior',
		'Midweight',
		'Python',
		'React',
		'CSS',
		'JavaScript',
		'Sass',
		'Junior',
		'Backend',
		'RoR',
		'HTML',
		'Vue',
		'Django',
	],
	activeFilters: [],
};

export const jobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		clearFilters: state => {
			state.activeFilters = [];
		},
		addActiveFilters: (state, { payload }: PayloadAction<string>) => {
			if (state.activeFilters.includes(payload)) return;
			state.activeFilters = [...state.activeFilters, payload];
		},
		removeFilters: (state, { payload }: PayloadAction<string>) => {
			state.activeFilters = state.activeFilters.filter(
				item => item !== payload
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { clearFilters, addActiveFilters, removeFilters } =
	jobsSlice.actions;

export default jobsSlice.reducer;
