const express = require('express')
const db = require('../db/db')
const router = express.Router()


// Create a city
router.post('/city', async (req,res) => {
    try{
        const data = await db.select().table('city')
        const myID = data[data.length-1].ID+1
        const newCity = {
            ID: myID,
            Name: req.body.Name,
            CountryCode: req.body.CountryCode,
            District: req.body.District,
            Population: req.body.Population
        }

        const id = await db('city')
            .insert(newCity)
        const city = await db('city').where({ID: myID})
        res.status(201).json(city)
    }catch(e){
        res.status(500).json({success: false, message: 'Error 500'})
    }
})

// Read a single city by name
router.get('/city/:city', async (req,res) => {
    try{
        const [city] = await db('city').where({Name: req.params.city})
        if(!city){
            res.status(404).json({success: false, message: 'City Not Found'})
        }else{
            const theCity = {
            Name: city.Name,
            CountryCode: city.CountryCode,
            District: city.District,
            Population: city.Population
        }
        res.status(200).send(theCity)
        }
        
    }catch(e){
        res.status(400).json({success: false, message: 'Not Found'})
    }
})

// Update population of a city by ID
router.put('/city/:id', async (req,res) => {
    try{
        const city = await db('city').where({ID: req.params.id}).update({Population: req.body.Population})
        if(!city){
            res.status(404).json({success: false, message: 'No City Found'})
        }else{
            const theCity = await db('city').where({ID: req.params.id})
            res.status(201).json(theCity)
        }
    }catch(e){
        res.status(400).json({success: false, message: 'City Not Found'})
    }
})


// Delete a city by ID
router.delete('/city/:id', async (req,res) => {
    try{
        const city = await db('city').where({ID: req.params.id}).del()
        if(!city){
            res.status(404).json({success: false})
        }else{
            res.status(201).json({success: true})
        }
    }catch(e){
        res.status(400).json({success: false})
    }
})

module.exports = router