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
photographerRouter.get('/api/photographers/:zipcode/:event', function(req, res) {
    photographerController.getFilteredPhotographers(req, res);
})

module.exports = photographerRouter;

