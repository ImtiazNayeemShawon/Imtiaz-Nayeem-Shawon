const express = require("express");
const router = express.Router();


//GET ALL TODOS
router.get('/',async(req,res)=>{
res.send("I am alive")
});

module.exports = router;