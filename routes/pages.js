const express = require('express');
const router = express.Router();

// page.php
router.get('/', (req, res) => {
    res.send('Ini adalah halaman statis (mirip page.php).');
});

module.exports = router;
