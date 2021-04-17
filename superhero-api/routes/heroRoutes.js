const express = require('express')

const heroController = require('../controllers/heroController')
const router = express.Router()


router
    .route('/') //api/hero
    .get(heroController.getAllHero)
    .post(heroController.createHero)
    
router
    .route('/:id')// api/hero/id
    .get(heroController.getSingleHero)
    .delete(heroController.deleteHero)
    .patch(heroController.updateHero)

module.exports = router