# node-proxy-defaults

Default handlers/traps for the [obsolete es6 proxies](http://wiki.ecmascript.org/doku.php?do=show&id=harmony:proxies#trap_defaults) (that is currently used in Webkit and therefore in Node).

[![NPM][npm]](https://npmjs.org/package/node-proxy-defaults)

## Usage

```js
var handler = require('node-proxy-defaults')
var proxy = Proxy.create(handler(obj, {
  get: function() {
    return 'something'
  }
}))
```

## API

### hander(obj, [overwrites])

Returns an object containing default handler implemented for the provided `obj`. Each handler can be overwritten, by providing `overwrites`.

## MIT License

Copyright (c) 2014 Markus Ast

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm]: https://badge.fury.io/js/node-proxy-defaults.svg