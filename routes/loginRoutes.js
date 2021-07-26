const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login', {title: 'Login'});
});

//User authentication using Passport
router.post('/', passport.authenticate('local',
    {failureRedirct: '/login?alert=error'}),
    (req, res) => {
        req.session.user=req.user
        res.redirect('/home')
});

//Ending the session ie Log Out User
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
});

module.exports = router;