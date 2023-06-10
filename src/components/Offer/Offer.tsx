import { FC, useEffect, useState } from 'react';

//Styles
import styles from './Offer.module.scss';

//Components
import { OfferFilterItems } from 'components/OfferFilterItems/OfferFilterItems';

//Other
import { jobCard } from 'models/models';

export const Offer: FC<jobCard> = ({
	id,
	company,
	logo,
	isNew,
	isFeatured,
	position,
	role,
	level,
	postedAt,
	contract,
	location,
	languages,
	tools,
}) => {
	const [filtersFromOffer, setFiltersFromOffer] = useState<string[]>([]);

	useEffect(() => {
		setFiltersFromOffer([...languages, ...tools, role, level]);
	}, [languages, tools, role, level]);

	return (
		<div
			className={
				isFeatured ? `${styles.offer} ${styles.featuredActive}` : styles.offer
			}
		>
			<div className={styles.info}>
				<div className={styles.image}>
					<img src={logo} alt='company-icon' />
				</div>

				<div className={styles.details}>
					<div className={styles.header}>
						<div className={styles.name}>{company}</div>
						<div className={styles.status}>
							{isNew && <p className={styles.new}>NEW!</p>}
							{isFeatured && <p className={styles.featured}>FEATURED!</p>}
						</div>
					</div>

					<div className={styles.position}>
						<h1>{position}</h1>
					</div>

					<div className={styles.additional}>
						<span>{postedAt}</span>
						<div>•</div>
						<span>{contract}</span>
						<div>•</div>
						<span>{location}</span>
					</div>
				</div>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.filters}>
				{filtersFromOffer.map(tag => (
					<OfferFilterItems key={tag} tag={tag} />
				))}
			</div>
		</div>
	);
};
