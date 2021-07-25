const express = require('express');
const router = express.Router();

router.get('/washers', (req, res) => {
    res.render('washers');
});

router.get('/washerRegister', (req, res) => {
    res.render('washerReg')
})

module.exports = router;