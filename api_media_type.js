var DataMediaType = require('data-media-type');
var HypermediaType = require('hypermedia-type');

var types = {
  ALL: '*/*' // good for specifying a wildcard media type range
};

[DataMediaType, HypermediaType].forEach(function(mixin) {
  Object.keys(mixin).forEach(function(key) {
    if (mixin.hasOwnProperty(key)) {
      types[key] = mixin[key];
    }
  });
});

module.exports = Object.freeze(types);
