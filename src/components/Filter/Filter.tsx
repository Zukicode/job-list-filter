import { FC } from 'react';

//Styles
import styles from './Filter.module.scss';

//Components
import { FilterItems } from 'components/FilterItems/FilterItems';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, filterState } from 'store/slices/filterSlice';
import { RootState } from 'store/store';

export const Filter: FC = () => {
	const dipsatch = useDispatch();
	const { activeFilters } = useSelector<RootState, filterState>(
		state => state.filter
	);

	const clearActiveFilters = () => {
		dipsatch(clearFilters());
	};

	if (!activeFilters.length) {
		return <></>;
	}

	return (
		<div className={styles.filter}>
			<div className={styles.items}>
				{activeFilters.map(filter => (
					<FilterItems key={filter} tag={filter} />
				))}
			</div>

			<button onClick={clearActiveFilters} className={styles.clear}>
				Clear
			</button>
		</div>
	);
};
