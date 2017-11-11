const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('test');
    res.status(200).json({ message: "it works!" });
});

module.exports = router;
