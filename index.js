// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()


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
const DB_USER = 'USER'
const DB_PASSWD = encodeURIComponent('SENHA')


//porta
mongoose
.connect(
    `LINK MONGO DB`,
    //mongodb+srv://${DB_USER}:${DB_PASSWD}@LINK
    )

.then(() => {
    console.log('conectado ao mongo db')
    app.listen(3001)
})

.catch((err)=> console.log(err))
