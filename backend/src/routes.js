const express = require("express")
const Ongcontroller = require('./controller/Ongcontroller')
const Incidentcontroller = require('./controller/Incidentcontroller')


const routes = express.Router()

routes.get("/ongs", Ongcontroller.list)
routes.post("/ongs", Ongcontroller.create)

routes.get("/incidents", Incidentcontroller.list)
routes.post("/incidents", Incidentcontroller.create)

module.exports = routes