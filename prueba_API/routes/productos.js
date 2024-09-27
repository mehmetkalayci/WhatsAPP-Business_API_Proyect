import { Router } from "express";
export const router = Router()

router.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a la tienda!!"
    })
})

router.get('/', (req, res) => {
    res.json({
        message: "Estás conectado a la API: Productos"
    })
})

router.get('/:id', (req, res) => {
    res.json({
        message: `Obteniendo producto con el Id: ${req.params.id}`
    })
})

router.post('/:id', (req, res) => {
    res.json({
        message: `Añadiendo productos a la lista`
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        message: `Eliminando productos de la lista`
    })
})



