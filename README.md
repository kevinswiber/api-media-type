# api-media-type
A Node.js module exporting a map of common media type names to registered IANA media type names. 
Built specifically to serve the needs of Web APIs.

This module combines the fields offered by [`hypermedia-type`](https://github.com/kevinswiber/hypermedia-type) and [`data-media-type`](https://github.com/kevinswiber/data-media-type).

## Install

`$ npm install api-media-type`

## Usage

```javascript
var http = require('http');
var MediaType = require('api-media-type');

http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', MediaType.SIREN);

  var entity = {
    class: [ 'order' ],
    properties: { 
        orderNumber: 42, 
        itemCount: 3,
        status: 'pending'
    },
    links: [
      { rel: [ 'self' ], href: 'http://api.x.io/orders/42' },
      { rel: [ 'next' ], href: 'http://api.x.io/orders/43' }
    ]
  };

  res.end(JSON.stringify(entity));
}).listen(1337);
```

## Supported Media Types

See documentation for [`hypermedia-type`](https://github.com/kevinswiber/hypermedia-type) and [`data-media-type`](https://github.com/kevinswiber/data-media-type).


## License

MIT
