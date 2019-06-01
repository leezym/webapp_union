const express = require('express')
const path = require('path')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
//const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const app = express()

// MongoDB
mongoose.connect('mongodb+srv://leezym:' + process.env.MONGO_ATLAS_PW + '@cluster0-cxt63.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
	.then(() => console.log("MongoDB connected"))
    .catch(() => console.log(err))

//require('./models/Users')
require('../config/passport')(passport)

// Mensaje de peticiones
app.use(morgan('dev'))

// Convertir e interpretar cookies de peticiones
//app.use(cookieParser())

// Procesar los datos
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// Manejar sesiones
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Pasar info entre paginas
app.use(flash())

// Rutas
app.use('/uploads', express.static('uploads'))
app.use('/',require('./routes/index'))(app, passport)
app.use('/mess',require('./routes/messaging/index'))
app.use('/file',require('./routes/files/fileManaging'))
app.use('/versioning', require('./routes/files/versioning'))

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: err,
        }
    })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        errors: {
            message: err.message,
            error: {},
        }
    })
})
app.listen(8080, () => console.log('Server running on http://localhost:8080/'));