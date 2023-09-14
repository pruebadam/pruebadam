const express = require ('express')
const path = require('path')
const {engine} = require('express-handlebars')
const myconecction = require('express-myconnection')
const bodyParser = require('body-parser')
const pool = require ('./database.js')
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir:  path.join(app.get('views'), 'layouts'),
  partialsDir:  path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))

 app.use(session({
   secret: 'tfgsession',
   resave: false,
   saveUninitialized: false,
   store: new mysqlStore({},pool)
 }))

app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true
// }))
const indexRouter = require('./routes/index')
app.listen(3000)
console.log('Escuchando en el puerto 3000')


app.use('/', indexRouter)
module.exports = app