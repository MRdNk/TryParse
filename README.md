TryParse
========

TryParse allows you to test if a value is an integer, a float

Installation
```bash
npm install tryparse
```

Usage
```node
var tryparse = require('tryparse')
var myInt = tryparse.int(4)
> 4
var myFloat = tryparse.float(4.5)
> 4.5
var notInt = tryParse.int('fhjdsk')
> null
var notFloat = tryParse.float('dhgjsjkg')
> null

```

Run Tests (requires tap: https://npmjs.org/package/tap)
```bash
npm test
```