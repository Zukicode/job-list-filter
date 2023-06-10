import { FC } from 'react';

//Styles
import styles from './FilterItems.module.scss';

//Icons
import icon from 'assets/icon-remove.svg';

//Redux
import { useDispatch } from 'react-redux';
import { removeFilters } from 'store/slices/filterSlice';

type FilterItemsProps = {
	tag: string;
};

export const FilterItems: FC<FilterItemsProps> = ({ tag }) => {
	const dispatch = useDispatch();

	const removeFilter = () => dispatch(removeFilters(tag));

	return (
		<span className={styles.item}>
			<p>{tag}</p>
			<button onClick={removeFilter}>
				<img src={icon} alt='remove' />
			</button>
		</span>
	);
};
