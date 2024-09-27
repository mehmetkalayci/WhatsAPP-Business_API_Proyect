import { Router } from "express"
import { router } from "./productos.js"

export var rou = Router()
var productos = router

rou.use('/productos', productos)

rou.get('/', (req, res) => {
    res.status(200).json({
        message: "Estás conectado a la API"
    })
})
