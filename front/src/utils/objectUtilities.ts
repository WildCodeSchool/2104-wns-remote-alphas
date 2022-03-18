import { User } from './types';

export type NestedObject = {
  [key: string]: string | number | unknown[] | NestedObject;
};

function removeTypename(obj: NestedObject): NestedObject {
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
      returnedObj = {
        ...returnedObj,
        [key]: removeTypename(obj[key] as NestedObject),
      };
    }
  }
  return returnedObj;
}

function deleteSomeKeys(obj: User, keyToRemove: string[]): Omit<User, 'role' | 'id'> {
  return Object.fromEntries(
    Object.entries(obj)
      // remove keys which are in keyToRemove params
      .map((entry) => (!keyToRemove.includes(entry[0]) ? entry : []))
      // remove empty arrays
      .filter((item) => item.length !== 0),
  );
}

function extractColors(colorsObject: {
  [key: string]: { color: string; title: string; description: string };
}): string[] {
  return Object.values(colorsObject).map((colorObject) => colorObject.color);
}

export { deleteSomeKeys, extractColors, removeTypename };
