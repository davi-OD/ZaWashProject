const express = require('express');
const User = require('../models/User');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('userReg', {title: 'user'});
});

//Register a user, using the passport method register()
router.post('/', async(req, res) => {
    const sec = new User(req.body);
    await User.register(sec, req.body.password, (err) => {
        if(err){
            res.status(400).render('userReg', {title: 'Register User'});
            console.log(err)
        }else{
            res.redirect('/')
        }
    })
})

module.exports = router;