// @flow
const express = require('express');

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'ELEGONZA' });
});

module.exports = router;
