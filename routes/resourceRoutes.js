const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('resources', { title: 'Resources Bought' })
})