const express = require("express")
const Ongcontroller = require('./controller/Ongcontroller')
const Incidentcontroller = require('./controller/Incidentcontroller')
const Profilecontroller = require('./controller/Profilecontroller')
const Sessioncontroller = require('./controller/Sessioncontroller')


const routes = express.Router()

routes.post("/session", Sessioncontroller.create)

routes.get("/ongs", Ongcontroller.list)
routes.post("/ongs", Ongcontroller.create)

routes.get("/incidents", Incidentcontroller.list)
routes.post("/incidents", Incidentcontroller.create)

routes.delete("/incidents/:id", Incidentcontroller.delete)

routes.get("/profile", Profilecontroller.list)

module.exports = routes