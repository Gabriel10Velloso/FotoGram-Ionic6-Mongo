import Server from './class/server';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// FileUpload
import fileUpload from 'express-fileupload';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';
import post2Routes from './routes/post2';

import cors from 'cors';

const server = new Server();


// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// FileUpload
server.app.use( fileUpload({ useTempFiles: false }) );

// Cors
server.app.use(cors({origin: true, credentials: true}));

// Rutas de mi app
server.app.use('/user', userRoutes );
server.app.use('/posts', postRoutes );
server.app.use('/posts2', post2Routes );


// Conectar DB
mongoose.connect('mongodb://localhost:27017/fotosgram',                 
  { useNewUrlParser: true, useCreateIndex: true }, ( err ) => {
   if ( err ) throw err;
   console.log('Base de datos ONLINE');
})

// Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});