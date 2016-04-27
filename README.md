# merge-and-concat

[![NPM version][npm-image]][npm-url]
[![Unix Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Merge objects and concatenating arrays inside them

## Install

    npm install --save merge-and-concat

## Usage

```js
import mergeAndConcat from 'merge-and-concat';

mergeAndConcat(
  { hey: 'hey', list: [1, 2] },
  { ho: 'ho', list: [3, 4] },
  { uni: 'corns' }
); // { hey: 'hey', ho: 'ho', uni: 'corns', list: [1, 2, 3, 4] }

// removing dupes
mergeAndConcat(
  { after_script: ['npm run coverage'] },
  { after_script: ['npm run coverage'] }
); // { after_script: ['npm run coverage'] }
```

## API

### mergeAndConcat(...objects)

#### objects

*Required*  
Type: each item is `Object`

Set of objects

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/merge-and-concat
[npm-image]: https://img.shields.io/npm/v/merge-and-concat.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/merge-and-concat
[travis-image]: https://img.shields.io/travis/iamstarkov/merge-and-concat.svg?style=flat-square&label=unix

[appveyor-url]: https://ci.appveyor.com/project/iamstarkov/merge-and-concat
[appveyor-image]: https://img.shields.io/appveyor/ci/iamstarkov/merge-and-concat.svg?style=flat-square&label=windows

[coveralls-url]: https://coveralls.io/r/iamstarkov/merge-and-concat
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/merge-and-concat.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/merge-and-concat
[depstat-image]: https://david-dm.org/iamstarkov/merge-and-concat.svg?style=flat-square
