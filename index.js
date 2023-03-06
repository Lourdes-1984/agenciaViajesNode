import express from 'express'
import router from './routes/index.js'

const app = express()

//puerto
const port = process.env.PORT || 3000

//pug
app.set('view engine' , 'pug')

//obterner el año actual
app.use((req,res, next) => {
    const year = new Date()

    res.locals.actualYear = year.getFullYear()

    return next()
})

//carpeta publica
app.use(express.static('public'))

//Router
app.use('/' , router)

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})


    

