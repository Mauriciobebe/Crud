const router = require('express').Router();

const us = require('../controller/us');


router.get('/', us.list);
router.post('/add', us.save);
router.get('/update/:id', us.edit);
router.post('/update/:id', us.update);
router.get('/delete/:id', us.delete);


module.exports = router;