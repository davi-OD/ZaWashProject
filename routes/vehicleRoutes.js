const express = require('express');
const router = express.Router();

router.get('/vehicles', (req, res) => {
    res.render('vehicles', {title: 'vehicles'});
});

router.get('/vehicleRegister', (req, res) => {
    res.render('vehicleReg')
})

module.exports = router;