//routes
const express = require('express');
const router = express.Router(); // Se encarga de hacer las rutas



router.get('/', (req,res)=> {
   
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title: 'Primera pagina Node'});
 });


 // Router de contact
 router.get('/contact', (req,res)=> {
    res.render('contact.html', {title: 'Pagina de contacto'});
    
 });

 module.exports = router;