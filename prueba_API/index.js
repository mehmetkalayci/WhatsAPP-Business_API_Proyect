import express from 'express'
import bodyParser from 'body-parser'
import { rou } from './routes/routes.js'

var app = express()
var port = process.env.PORT || 8080 

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api', rou)

app.listen(port, () => {
    console.log(`API escuchando en el puerto http://localhost:${port}`);
})

