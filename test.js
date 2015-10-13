import { equal } from 'assert';
import mergeConcat from './index';

it('should mergeConcat', () =>
  equal(mergeConcat('unicorns'), 'unicorns'));

it('should mergeConcat invalid input', () =>
  equal(mergeConcat(), undefined));
