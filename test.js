import test from 'ava';
import mergeAndConcat from './index';

test('basic', t => t.deepEqual(
  mergeAndConcat(
    { hey: 'hey', list: [1, 2] },
    { ho: 'ho', list: [3, 4] },
    { uni: 'corns' }
  ),
  { hey: 'hey', ho: 'ho', uni: 'corns', list: [1, 2, 3, 4] }
));

test('remove dupes', t => t.deepEqual(
  mergeAndConcat(
    { after_script: ['npm run coverage'] },
    { after_script: ['npm run coverage'] }
  ),
  { after_script: ['npm run coverage'] }
));

test('empty input', t => t.deepEqual(
  mergeAndConcat(),
  {}
));
