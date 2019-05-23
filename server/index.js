const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    consign = require('consign'),
    cors = require('cors');

var app = express();

// Permitindo cors
app.use(cors())

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(require('method-override')());

// Criando segredo para sessão
app.use(session({secret: 'mySecret', resave: true, saveUninitialized: true, expires: new Date(Date.now() + (30 * 86400 * 1000))}));

// Variável secreta para 
app.set('superSecret', 'ilove');

// Recebemos logs mais detalhados
app.use(morgan('dev'));

// Usando consgin para chamar arquivos
consign({cwd:'server/app'})
	.include('controllers')
	.then('routes')
	.into(app)

// Dizendo qual a porta em que rodará 
//(process.env.PORT é a porta do Heroku)
app.set('port', (process.env.PORT || 4030));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+ app.get('port'));
});