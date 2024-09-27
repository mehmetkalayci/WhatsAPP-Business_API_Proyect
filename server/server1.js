import express from "express"
import bodyParser from "body-parser"
import crypto from "crypto"

const app = express()

app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    console.log('Webhook received: ', req.body)
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000');
});