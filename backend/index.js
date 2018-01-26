const { router, get } = require('microrouter');
const cors = require('micro-cors')();
const { search } = require('./api-routes');
const { staticHandler, renderIndex } = require('./static-routes');

module.exports = router(
  get('/api/search/:searchTerm', cors(search)),
  get('/cool', renderIndex),
  get('/foo', renderIndex),
  get('/biz', renderIndex),
  get('/*', staticHandler)
);
