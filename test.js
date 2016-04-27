import test from 'ava';
import { mergeAndConcat, mergeAndConcatAsync } from './index';

test('basic', t =>
  t.is(mergeAndConcat('unicorns'), 'unicorns'));

test('empty input', t => t.throws(() => { mergeAndConcat(); }, TypeError));
test('invalid input', t => t.throws(() => { mergeAndConcat(2); }, TypeError));

test('async :: basic', async t => t.is(
  await mergeAndConcatAsync('unicorns'),
  'unicorns'));

test('async :: empty input', t => t.throws(mergeAndConcatAsync(), TypeError));
test('async :: invalid input', t => t.throws(mergeAndConcatAsync(2), TypeError));
