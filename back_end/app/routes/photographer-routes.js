const express = require('express')
const photographerRouter = express.Router();
const photographerController = require('../controllers/photographer-controller')
const { check, validationResult } = require('express-validator');


//ROUTES: Photographer Routes
//Route 1: Get a list of all photographers 
photographerRouter.get('/api/photographers', function(req, res) {
    photographerController.getPhotographers(req, res);
})

//Route 2: Get a list of photographers for event and zipcode 
photographerRouter.get('/api/photographers/:zipcode/:event', [
    check('event').isLength({ min: 2 }).trim().escape(),
    check('zipcode').isLength({ min: 2 }).trim().escape() //TO DO: Need wildcard validation for both zipcode types
], function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    photographerController.getFilteredPhotographers(req, res);
})

module.exports = photographerRouter;

