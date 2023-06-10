import { FC, useEffect, useState } from 'react';

//Styles
import styles from './Content.module.scss';

//Components
import { Offer } from 'components/Offer/Offer';

//Redux
import { useSelector } from 'react-redux';
import { filterState } from 'store/slices/filterSlice';
import { jobsState } from 'store/slices/jobsSlice';
import { RootState } from 'store/store';

//Other
import { jobCard } from 'models/models';
import { findMatching } from 'utils/utils';

export const Content: FC = () => {
	const { activeFilters } = useSelector<RootState, filterState>(
		state => state.filter
	);
	const { jobsList } = useSelector<RootState, jobsState>(state => state.jobs);
	const [activeJobsList, setActiveJobsList] = useState<jobCard[]>([]);

	useEffect(() => {
		if (activeFilters.length) {
			setActiveJobsList(findMatching(jobsList, activeFilters));
		} else {
			setActiveJobsList(jobsList);
		}
	}, [activeFilters, jobsList]);

	return (
		<div className={styles.content}>
			{activeJobsList.map(job => (
				<Offer key={job.id} {...job} />
			))}
		</div>
	);
};
