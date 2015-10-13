import { deepEqual } from 'assert';
import mergeAndConcat from './index';

it('should mergeAndConcat', () =>
  deepEqual(mergeAndConcat(
      { hey: 'hey', list: [1, 2] },
      { ho: 'ho', list: [3, 4] },
      { uni: 'corns' }
    ),
    { hey: 'hey', ho: 'ho', uni: 'corns', list: [1, 2, 3, 4] }
  ));
