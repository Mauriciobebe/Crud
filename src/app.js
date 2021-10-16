const express = require('express'),

      path = require('path'),

      morgan = require('morgan'),

      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();


const usR = require('./routes/usuario');


app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '04022004',
  port: 3306,
  database: 'crudalmita'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use('/', usR);

app.use(express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando desde el puerto  ${app.get('port')}`);
});