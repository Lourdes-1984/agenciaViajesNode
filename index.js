import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express()

//conectar la base de datos 
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))


//puerto
const port = process.env.PORT || 3000

//pug
app.set('view engine' , 'pug')

//obterner el año actual
app.use((req,res, next) => {
    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombresitio = "Agencia de Viajes"

    return next()
})
//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//carpeta publica
app.use(express.static('public'))

//Router
app.use('/' , router)

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})


    

