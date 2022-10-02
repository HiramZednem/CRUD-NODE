const { Router } = require('express')
const router = Router();

router.get( '/test', (req, res) => {
    // aqui podriamos enviar un archivo HTML o responder un HTML con un CSS...., pero ahorita estamos creando una restAPI, por lo que lo interesante es responder formatos JSON
    const data = {
        "name" : "Hiram",
        "website" : "hiramendez.com "
    };
    ///AQUI ESTOY ENVIANDO UN JSON
    res.json( data )
  });

router.get ( '/spiderman', ( req, res ) => {
  const spiderman = {
    "nombre" : "Peter Parker",
    "nombreSuperHeroe" : "Hombre Araña",
    "esVengador" : true,
    "poder" : "Lanzar telarañas"
  };

  res.json ( spiderman );
} );
//Cuando entre a spiderman enviale un json de expiderman

module.exports = router;
//SE EXPORTA TODO PARA USAR EL REQUIRE Y SE EJECUTE TODO EL CODIGO