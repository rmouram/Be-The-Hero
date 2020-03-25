const express = require("express")
const Ongcontroller = require('./controller/Ongcontroller')

const routes = express.Router()

routes.get("/ongs", Ongcontroller.list)
routes.post("/ongs", Ongcontroller.create)

module.exports = routes