const express = require('express');
const chirpsStore = require('../filestore');
let router = express.Router();

router.get('/:id', (req, res) => {
    res.send('chirps');
});

module.exports = router;