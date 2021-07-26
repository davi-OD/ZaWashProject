const express = require('express');
const router = express.Router();
const Washer = require('../models/Washer');

//Creating new Washer
router.get('/washerRegister', (req, res) => {
    res.render('washerReg', {title: 'Register Washer'})
});


router.post('/washerRegister', async (req, res) => {
    try{
        const washer = new Washer(req.body);
        await washer.save()
        res.redirect('/washers')
    }catch(err){
        console.log(err);
        res.send('Sorry! Something Went Wrong.')
    }
});

//Finding a Washer
router.get('/', async (req, res) => {
    try{
        let washerInfo = await Washer.find();
        if (req.query.role) {
            washerInfo = await Washer.find({ role: req.query.role });
        }
        res.render('washers', {washer:washerInfo, title: 'List of Washers'});
    }catch(err){
        res.send('Process Failed! No employees retrived');
    }
});

//Saving the updated Washer Info
router.post('/update', async (req, res) => {
    try{
        await Washer.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/washers');
    }catch(err) {
        res.status(404).send("Failed to update item in the database")
    }
});

//Deleting a Washer
router.post('/delete', async (req, res) => {
    try{
        await Washer.deleteOne({_id: req.body.id})
        res.redirect('back');
    }catch(err){
        res.status(400).send('Failed to delete item')
    }
});


module.exports = router;