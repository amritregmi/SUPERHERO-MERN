const mongoose = require('mongoose')

const heroSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    powerstats: {
        combat: {
            type: Number
        },
        durability: {
            type: Number
        },
        intelligence: {
            type: Number
        },
        power: {
            type: Number
        },
    },
    image: {
        url: {
            type: String
        }
    },
    isFromBackend: {
        type: Boolean,
        default: true
    }
    
})

const Hero = mongoose.model('Hero', heroSchema)

module.exports = Hero
