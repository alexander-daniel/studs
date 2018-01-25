const fs = require('fs');
const { send } = require('micro');
const cors = require('micro-cors')()
const { router, get } = require('microrouter')

const search = async (req, res) => {
  try {
    send(res, 200, { foo: 'bar' });
  }

  catch (err) {
    send(res, 400, err.message);
  }
}

const staticHandler = async (req, res) => {
  const filePath = req.url === '/' ? 'index.html' : req.url;
  try {
    const data = fs.readFileSync(`${__dirname}/frontend/static/${filePath}`, 'utf8');
    send(res, 200, data);
  }

  catch (err) {
    send(res, 404, 'not found');
  }
}

module.exports = router(
  get('/api/search/:searchTerm', cors(search)),
  get('/*', staticHandler)
)
