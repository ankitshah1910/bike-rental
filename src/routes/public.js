const express = require('express');
const router = express.Router();
const { getFileStream } = require('../middleware/s3');

router.get('/uploads/:year/:month/:day/:key', [], async (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

module.exports = router;
