const express = require('express')
const path = require('path');

// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

// Middlewares 
app.use(express.urlencoded({extended:false}))

// Archivos estáticos
app.use(express.static(path.join(__dirname,'public')))


module.exports = app



const { engine }  = require('express-handlebars')


// Configuraciones 

app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))
app.set('view engine','.hbs')

// Rutas 
// Rutas 
app.use(require('./routers/index.routes'))
