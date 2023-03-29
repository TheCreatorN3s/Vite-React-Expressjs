const express = require('express');
const route = express.Router()
const users = require('../backend/database/mongoose.js')

route.get('/', async (req, res) => {
    try {
        const getusers = await users.find({});
        res.json(getusers);
    }
    catch (err) { console.log(err) };
});

route.post('/', async (req, res) => {
    try {
        const createusers = await users.create(req.body);
        res.json({
            user: "created successfully"
        })
    }
    catch (err) {
        console.log(err)
    };
})

module.exports = route;