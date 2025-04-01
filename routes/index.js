const express = require('express');
const router = express.Router();

const Url = require('../models/url');

router.get('/:code', async (req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code});

        if(url){
            return res.redirect(url.longUrl);
        } else{
            return res.status(400).json('No URL Found.');
        }
    } catch(err){
        console.error(err);
        res.status(500).json('Server Error.');
    }
})

module.exports = router;