// config inicial
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const URL = process.env.URL;
const PORT = process.env.PORT;

const cors = require('cors');
app.use(cors({ origin: true }));

//forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
//rota
app.get('/',(req, res) => {
    //mostar req
    res.json({message: 'oi express'})
})

//porta
mongoose
.connect(
    URL
    )

.then(() => {
    console.log('conectado ao mongo db')
    app.listen(PORT)
})

.catch((err)=> console.log(err))
