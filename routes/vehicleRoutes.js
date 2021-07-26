const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle')

router.get('/vehicleRegister', (req, res) => {
    res.render('vehicleReg', {title: 'Register Vehicle'})
});

router.post('/vehicleRegister', async (req, res) => {
    try{
        const vehicleInfo = new Vehicle(req.body);
        await vehicleInfo.save()
        res.redirect('/vehicles')
    }catch(err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
});

router.get('/', async (req, res) => {
    try{
        let packageWash = await Vehicle.find();
        if (req.query.package) {
            packageWash = await Vehicle.find({ package: req.query.package })
        }
        res.render('vehicles', {washes: package, title: 'Vehicles'});
    }catch(err) {
        res.send('Process failed! No Vehicles Added')
    }
});

module.exports = router;