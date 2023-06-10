import { FC } from 'react';

//Styles
import styles from './App.module.scss';

//Components
import { Content } from 'components/Content/Content';
import { Filter } from 'components/Filter/Filter';
import { Footer } from 'components/Footer/Footer';
import { Header } from '../Header/Header';

export const App: FC = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Filter />
			<Content />
			<Footer />
		</div>
	);
};
