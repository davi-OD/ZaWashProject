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
        res.render('vehicles', {wash: packageWash, title: 'Vehicles'});
    }catch(err) {
        res.send('Process failed! No Vehicles Added')
    }
});

//Saving the updated Vehicle Info
router.post('/update', async (req, res) => {
    try{
        await Vehicle.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/vehicles');
    }catch(err) {
        res.status(404).send("Failed to update item in the database")
    }
});

//Deleting a Vehicle
router.post('/delete', async (req, res) => {
    try{
        await Vehicle.deleteOne({_id: req.body.id})
        res.redirect('back');
    }catch(err){
        res.status(400).send('Failed to delete item')
    }
});

module.exports = router;