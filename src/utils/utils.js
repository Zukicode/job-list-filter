export function findMatching(jobsList, activeFilters) {
	const matchingObjects = [];

	for (let i = 0; i < jobsList.length; i++) {
		const obj = jobsList[i];
		let found = true;

		for (let j = 0; j < activeFilters.length; j++) {
			const searchValue = activeFilters[j];
			let valueFound = false;

			for (const key in obj) {
				if (Array.isArray(obj[key]) && obj[key].includes(searchValue)) {
					valueFound = true;
					break;
				} else if (obj[key] === searchValue) {
					valueFound = true;
					break;
				}
			}

			if (!valueFound) {
				found = false;
				break;
			}
		}

		if (found) {
			matchingObjects.push(obj);
		}
	}

	return matchingObjects;
}

//thank you CHAT GPT <3
