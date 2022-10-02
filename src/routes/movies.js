const { Router } = require('express');
const router = Router();
const _ = require('underscore');


const movies = require('../sample.json');



router.get ('/', ( req, res ) => {
  res.json( movies );
});

router.post('/', ( req, res )=>{
  // en req.body, es donde recibo los json que se me envian
  const { titulo, director, year, rating } = req.body;
  if (titulo && director && year && rating){
    const id = movies.length + 1;
    const newMovie = {...req.body, id}
    movies.push(newMovie);

    res.json (movies);
  }else{
    res.send('Wrong Request');
  }
});

router.put( '/:id', (req, res) => {
    const { id : idRecibido } = req.params;
    const { titulo, director, year, rating } = req.body;
    let seEncontro = false;

    if ( titulo && director && year && rating ){
        _.each( movies, (movie, i) => {
            if(movie.id == idRecibido ){
                movie.titulo   = titulo; 
                movie.director = director; 
                movie.year     = year; 
                movie.rating   = rating; 
                seEncontro = true;
            }
        });
    }

    if ( seEncontro ){
        res.json(movies)
    }else{
        res.status(500).json({error: "Pelicula no encontrada"});
    }

});

//los dos puntos es para concatenar el parametro que recibo o que voy a recibir, esto se almacena en req.params
router.delete( '/:id', ( req,res ) => {

    console.log( req.params );
    const { id : idRecibido } = req.params; //Desestructuro el id que recibo de req.params y le cambio el nombre a idRecibido
    let seEncontro = false;

    _.each( movies, ( movie, i) => { // utilizo la libreria underscore para recorrer el arreglo y buscar la pelicula con el mismo a id
        if( movie?.id == idRecibido ){
          movies.splice( i ,1); // y si esta es encontrada se elimina
          seEncontro = true;
        }
    });

    if ( seEncontro ){
        res.json ( movies ); //y envia que lo ha borrado
    }else{
        res.status(500).json({error: 'Pelicula no encontrada'})
    }
});

module.exports = router;