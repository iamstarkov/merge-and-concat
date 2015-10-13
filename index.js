import { isArray, merge } from 'lodash';
const mergeArrays = (a, b) => { if (isArray(a)) { return a.concat(b); }}

export default function mergeConcat(...objects) {
  return merge(...objects, mergeArrays)
};
