import { FC } from 'react';

//Styles
import styles from './Footer.module.scss';

export const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<p>
				Created by{' '}
				<a href='https://github.com/Zukicode?tab=repositories'>zukicode</a>
			</p>
		</div>
	);
};
