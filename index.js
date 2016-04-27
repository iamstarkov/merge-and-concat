import { isArray, merge, uniq } from 'lodash';
const mergeArrays = (a, b) => { if (isArray(a)) { return uniq(a.concat(b)); }}

export default function mergeAndConcat(...objects) {
  return merge(...objects, mergeArrays)
};
