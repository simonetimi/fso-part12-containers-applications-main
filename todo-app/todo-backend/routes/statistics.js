const express = require('express');
const router = express.Router();
const redis = require('../redis');
const configs = require('../util/config');
const { getAsync, setAsync } = require('../redis');

/* GET index data. */
router.get('/', async (req, res) => {
  const count = await getAsync('todosCount');
  if (!count) {
    setAsync('todosCount', 0);
  }
  res.send({ addedTodos: count }).status(200);
});

module.exports = router;
