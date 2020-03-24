const express = require("express")

const routes = express.Router()

routes.post("/ongs",(req, res) => {
    const body = req.body
    console.log(body)
    return res.json({msg:"ola glr"})
})

module.exports = routes