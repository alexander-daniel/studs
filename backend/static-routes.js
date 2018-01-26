const fs = require('fs');
const ecstatic = require('ecstatic');
const { send } = require('micro');

module.exports.staticHandler = (req, res) => {
  return new Promise(resolve => {
    ecstatic({ root: `${__dirname}/../frontend/static` })(req, res, resolve);
  });
};

module.exports.renderIndex = async (req, res) => {
  try {
    const data = fs.readFileSync(`${__dirname}/../frontend/static/index.html`, 'utf8');
    send(res, 200, data);
  }

  catch (err) {
    send(res, 404, 'not found');
  }
};
