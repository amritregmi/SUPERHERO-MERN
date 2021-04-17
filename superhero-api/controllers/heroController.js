const Hero = require('../models/heroModel')

/**
 * @RETURNS the list of heros document 
 */
exports.getAllHero = async (req, res, next) => {
    const heros = await Hero.find()
    res.status(200).json({
        heros
    })
}

/**
 * @RETURNS the single hero based on ID 
 */
exports.getSingleHero = async (req, res, next) => {
    const hero = await Hero.findById(req.params.id)
    if (hero) {
        return res.status(200).json({
            status: true,
            hero
        })
    } else {
        return res.status(404).json({
            status:false
        })
    }
}

/**
 * @Creates a new hero document 
 */
exports.createHero = async (req, res, next) => {
    const { name, powerstats, image } = req.body.body
    const newHero = {
        name: name.toLowerCase(),
        powerstats,
        image
    }
    
    const hero = await Hero.create(newHero)
    if (!hero) {
        return res.status(400).json({
            status:'fail'
        })
    }
    res.status(201).json({
        hero
    })
}

/**
 * @Updates the hero document 
 */
exports.updateHero = async (req, res, next) => {
    
    const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
    if (!hero) {
        return res.status(400).json({
            status:'fail'
        })
    }
    res.status(200).json({
        hero
    })


}
/**
 * @Deletes heros document based on ID  
 */
exports.deleteHero = async (req, res, next) => {
    
    const hero = await Hero.findByIdAndDelete(req.params.id)
    if (!hero) {
        return res.status(404).json({
            status: 'fail',
            message:'No data found'
        })
    }
    res.status(200).json({
        status:'success'
    })
}