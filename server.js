const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

// Initialize
const app = express();
const corsconfig = { origin: 'http://127.0.0.1:5173' }

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsconfig));


// Static Files
app.use(express.static(path.join(__dirname,'client/dist')));

// Rutas
app.use('/api/backend', require('./routes/routes.controller'));

//Server Listening
const port = process.env.PORT || 3000;

app.listen(port, () =>{
	console.log('app on port 3000');
})