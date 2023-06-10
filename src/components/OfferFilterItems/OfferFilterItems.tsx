import { FC } from 'react';

//Styles
import styles from './OfferFilterItems.module.scss';

//Redux
import { useDispatch } from 'react-redux';
import { addActiveFilters } from 'store/slices/filterSlice';

type OfferFilterItemsProps = {
	tag: string;
};

export const OfferFilterItems: FC<OfferFilterItemsProps> = ({ tag }) => {
	const dispatch = useDispatch();

	const addToActiveFilter = () => dispatch(addActiveFilters(tag));

	return (
		<span onClick={addToActiveFilter} className={styles.filter}>
			<p>{tag}</p>
		</span>
	);
};
