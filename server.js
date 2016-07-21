var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json()); 


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( express.static( path.join( root, 'server' )));


app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});