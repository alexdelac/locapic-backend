var express = require("express");
var router = express.Router();

const Place = require('../models/places')

router.post('/', (req, res)=>{
    const newPlace = new Place({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    newPlace.save().then(data=>{
        console.log(data)
            res.json({result: true})
        
    })
})

router.get('/:nickname', (req, res)=>{
    Place.find({nickname: req.params.nickname})
        .then(data=>{
            console.log(data)
                res.json({result: true, places: data})
        })
})

router.delete('/', (req, res)=>{
    console.log(req.body)
    Place.deleteOne({nickname: req.body.nickname, name: req.body.name})
        .then(data=>{
            if(data.deletedCount > 0){
                res.json({result: true})
            } else {
                res.json({result: false})
            }
            
        })
})

module.exports = router;