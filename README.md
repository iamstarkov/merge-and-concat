# merge-concat

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Merge objects and concatenating arrays inside them

## Install

    npm install --save merge-concat

## Usage

```js
import mergeConcat from 'merge-concat';

mergeConcat(
  { hey: 'hey', list: [1, 2] },
  { ho: 'ho', list: [3, 4] },
  { uni: 'corns' }
); // { hey: 'hey', ho: 'ho', uni: 'corns', list: [1, 2, 3, 4] }
```

## API

### mergeConcat(...objects)

#### objects

*Required*  
Type: each item is `Object`

Set of objects

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/merge-concat
[npm-image]: https://img.shields.io/npm/v/merge-concat.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/merge-concat
[travis-image]: https://img.shields.io/travis/iamstarkov/merge-concat.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/merge-concat
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/merge-concat.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/merge-concat
[depstat-image]: https://david-dm.org/iamstarkov/merge-concat.svg?style=flat-square
