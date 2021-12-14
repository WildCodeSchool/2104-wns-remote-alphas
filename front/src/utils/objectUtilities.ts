/* eslint-disable guard-for-in */
/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */

import { User } from '../components/context/Context';

// type NestedObject = Record<string, string | number | unknown[] | NestedObject>;
function removeTypename(obj: any): any {
	let returnedObj = {};
	for (const key in obj) {
		if (
			Array.isArray(obj[key]) ||
			typeof obj[key] === 'string' ||
			typeof obj[key] === 'number' ||
			typeof obj[key] === 'boolean'
		) {
			if (key !== '__typename') {
				returnedObj = { ...returnedObj, [key]: obj[key] };
			}
		} else {
			console.log(key);
			returnedObj = { ...returnedObj, [key]: removeTypename(obj[key]) };
		}
	}
	return returnedObj;
}

function deleteSomeKeys(
	obj: User,
	keyToRemove: string[]
): Omit<User, 'role' | 'id'> {
	return Object.fromEntries(
		Object.entries(obj)
			// remove keys which are in keyToRemove params
			.map((entry) => (!keyToRemove.includes(entry[0]) ? entry : []))
			// remove empty arrays
			.filter((item) => item.length !== 0)
	);
}

export { deleteSomeKeys, removeTypename };
