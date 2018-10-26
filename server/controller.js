const Comments = require('../database/models');

module.exports = {
  get: (req, res) => {
    Comments.findAll()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
