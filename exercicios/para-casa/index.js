const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Para Casa - Reprograma On19 - Semana 14 - Autenticação",
        version: "1.0.0"
    })
})

module.exports = router