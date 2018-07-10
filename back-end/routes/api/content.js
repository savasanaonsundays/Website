// Different page content routes

//  e.g 
// 

const express = require('express')
const router = express.Router();

router.get('/test', (req,res) => res.json({msg: "content works"}));

module.exports = router;