const express = require('express');
const app= express();
const path= require('path');

//Configuraciones
app.set('views', path.join(__dirname, 'views'));        // el path de ./views/index.ejs
app.set('view engine','ejs'); // el modulo ejs de html , motor de plantilla
app.engine('html', require('ejs').renderFile);

//middlewares


// routes
app.use(require('./routes/index'));  // llama el index.js de routes


// static files
app.use(express.static(path.join(__dirname,'public')));

//listen server
app.listen(3000, () =>{
    console.log("server on port 3000");
});