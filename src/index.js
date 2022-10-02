const express = require ('express');
const app = express();
const morgan = require ('morgan');


// settings
app.set ( 'port', process.env.PORT || 3000 );
app.set('json spaces',2)

// middlewares (Procesa datos antes de que el servidor los reciba)
app.use ( morgan ('dev') ); // sirve para  ver cada peticion que llega al servidor
app.use ( express.urlencoded({extended: false}) ); // Sirve para enter inputs de formularios
app.use ( express.json() ); // entender los .json

//routes
app.use( require('./routes/index') )
//lo que le estoy diciendo aqui, es que a todas las rutas en movies le va a concatenar antes la direccion de /api/movies
app.use( '/api/movies' ,require('./routes/movies') )

// starting the server
app.listen( app.get('port') , () => {
  console.log(`Server on port ${app.get('port')}`);
})