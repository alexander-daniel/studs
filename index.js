const fs = require('fs');
const { send } = require('micro');
const cors = require('micro-cors')();
const { router, get } = require('microrouter');
const ecstatic = require('ecstatic');
const staticHandler = (req, res) => {
  return new Promise(resolve => {
    ecstatic({ root: `${__dirname}/frontend/static` })(req, res, resolve);
  });
};

const search = async (req, res) => {
  try {
    send(res, 200, { foo: 'bar' });
  }

  catch (err) {
    send(res, 400, err.message);
  }
};

const renderIndex = async (req, res) => {
  try {
    const data = fs.readFileSync(`${__dirname}/frontend/static/index.html`, 'utf8');
    send(res, 200, data);
  }

  catch (err) {
    send(res, 404, 'not found');
  }
};

module.exports = router(
  get('/api/search/:searchTerm', cors(search)),
  get('/cool', renderIndex),
  get('/foo', renderIndex),
  get('/biz', renderIndex),
  get('/*', staticHandler)
);
