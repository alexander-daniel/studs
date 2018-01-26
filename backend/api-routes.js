const { send } = require('micro');

module.exports.search = async (req, res) => {
  try {
    send(res, 200, { foo: 'bar' });
  }

  catch (err) {
    send(res, 400, err.message);
  }
};
