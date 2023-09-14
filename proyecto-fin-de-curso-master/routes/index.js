const express = require('express')
const router = express.Router()
const pool = require ('../database')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const _ = require('lodash');
router.get('/', (req, res) =>{
    if(req.session.loggedin == true){
        res.render('index.hbs', {name: req.session.name})
    }else{
        res.render('index.hbs')
    }
})
router.get('/registro', (req, res) =>{
    if(req.session.loggedin != true){
        res.render('registro.hbs')
    }else{
        res.redirect('/')
    }
})
router.post('/registro', async (req, res) =>{
    const {usuario, email, contrasena} = req.body
    bcrypt.hash(contrasena, 12).then( async hash => {
        const encriptada = hash;
        const newuser = {
            usuario,
            email,
            encriptada
          }
          const check = await pool.query('SELECT * FROM newuser WHERE email = ?', [email])
          if (check[0].length > 0){
            res.render('registro.hbs', {error: 'Este usuario ya existe'});
          }else{
            await pool.query('INSERT INTO newuser SET ?',[newuser])
            res.redirect('/')
          }
      })
})
router.get('/login', (req, res) =>{
    if(req.session.loggedin != true){
        res.render('login.hbs')
    }else{
        res.redirect('/')
    }
})
router.post('/login', async (req, res) =>{
    const{email, contrasena} = req.body
    const check = await pool.query('SELECT * FROM newuser WHERE email = ?', [email])
    if (check[0].length > 0){
        check[0].forEach (element => {
            bcrypt.compare(contrasena , element.encriptada, (err,isMatch)=>{
                if(!isMatch){
                res.render('login.hbs', {error: 'Contraseña incorrecta'})
                }else{
                    req.session.loggedin = true
                    req.session.name = element.usuario
                    res.redirect('/')
                }
            })
        })
        }else{
            res.render('login.hbs', {error: 'No existe ninguna cuenta con este correo eletrónico'})
        }
})
router.get('/logout', (req, res) => {
    if(req.session.loggedin == true){
        req.session.destroy();
        res.redirect('/')
    }else{
        res.redirect('/login')
    }
})
router.get('/pide', (req, res) => {
    if(req.session.loggedin == true){
        res.render('pide.hbs', {name: req.session.name})
    }else{
        res.render('pide.hbs')
    }
})
router.get('/confirmar', (req, res) => {
    if(req.session.loggedin == true){
        res.render('confirmar.hbs', {name: req.session.name})
    }else{
        res.render('confirmar.hbs')
    }
})
router.post('/confirmar', async (req, res) =>{
    let {direccion, efectivo, tarjeta, recogerefectivo, recogertarjeta} = req.body
    if (recogerefectivo == ''){
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: 'naavarrothai@gmail.com',
              pass: 'hqwgevdkorthgnxe',
            },
          });
          transporter.verify().then(() =>{
            console.log('Listo')
          });
       
          transporter.sendMail({
           from: 'Pedido "<naavarrothai@gmail.com>"',
           to: 'drojannp@gmail.com',
           subject: 'Pedido confirmado',
           text: 'Pedido para recoger con pago en efectivo a nombre de: ' + req.session.name
        })
    }
    if (recogertarjeta == ''){
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: 'naavarrothai@gmail.com',
              pass: 'hqwgevdkorthgnxe',
            },
          });
          transporter.verify().then(() =>{
            console.log('Listo')
          });
       
          transporter.sendMail({
           from: 'Pedido "<naavarrothai@gmail.com>"',
           to: 'drojannp@gmail.com',
           subject: 'Pedido confirmado',
           text: 'Pedido para recoger con pago en tarjeta a nombre de: ' + req.session.name
        })
    }
     if(efectivo == ''){
         let transporter = nodemailer.createTransport({
             host: 'smtp.gmail.com',
             port: 465,
             secure: true,
             auth: {
               user: 'naavarrothai@gmail.com',
               pass: 'hqwgevdkorthgnxe',
             },
           });
           transporter.verify().then(() =>{
             console.log('Listo')
           });
        
           transporter.sendMail({
            from: 'Pedido "<naavarrothai@gmail.com>"',
            to: 'drojannp@gmail.com',
            subject: 'Pedido confirmado',
            text: 'Pedido a domicilio con pago en efectivo a nombre de: ' + req.session.name + ' La dirección es: ' + direccion
         })
     }
     if (tarjeta == ''){
         tarjeta = 'Tarjeta'
         let transporter = nodemailer.createTransport({
             host: 'smtp.gmail.com',
             port: 465,
             secure: true,
             auth: {
               user: 'naavarrothai@gmail.com',
               pass: 'hqwgevdkorthgnxe',
             },
           });
           transporter.verify().then(() =>{
             console.log('Listo')
           });
        
           transporter.sendMail({
            from: 'Pedido "<naavarrothai@gmail.com>"',
            to: 'drojannp@gmail.com',
            subject: 'Pedido confirmado',
            text: 'Pedido a domicilio con pago en tarjeta a nombre de: ' + req.session.name + ' La dirección es: ' + direccion
         })
     }
     res.render('peconfirmado.hbs')
});
router.get('/reserva', (req, res) => {
    if(req.session.loggedin == true){
        res.render('reserva.hbs', {name: req.session.name})
    }else{
        res.render('reserva.hbs')
    }
})
router.post('/reserva', async (req, res) =>{
    const {nombre, telefono, email, personas, hora, fecha } = req.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'naavarrothai@gmail.com',
          pass: 'hqwgevdkorthgnxe',
        },
      });
      transporter.verify().then(() =>{
        console.log('Listo')
      });
   
      transporter.sendMail({
       from: 'Reserva "<naavarrothai@gmail.com>"',
       to: 'drojannp@gmail.com',
       subject: 'Reserva confirmada',
       html: `<h1>Reserva confirmada</h1><br><h3>Nombre: `+nombre+`</h3><h3>Telefono: `+telefono+`</h3><h3>Email: `+email+`</h3><h3>Personas: `+personas+`</h3><h3>Hora: `+hora+`</h3><h3>Fecha: `+fecha+`</h3>`
    })
    _.delay(function() {
        res.redirect('/')
    }, 2000);
});
router.get('/contacto', (req, res) => {
    if(req.session.loggedin == true){
        res.render('contacto.hbs', {name: req.session.name})
    }else{
        res.render('contacto.hbs')
    }
})
router.post('/contacto', async (req, res) =>{
    const {nombre, email, telefono, area } = req.body
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'naavarrothai@gmail.com',
          pass: 'hqwgevdkorthgnxe',
        },
      });
      transporter.verify().then(() =>{
        console.log('Listo')
      });
   
      transporter.sendMail({
       from: 'Contacto "<naavarrothai@gmail.com>"',
       to: 'drojannp@gmail.com',
       subject: 'Sugerencia recibida',
       html: `<h1>Interes en trabajar o sugerencia</h1><br><h3>Nombre: `+nombre+`</h3><h3>Telefono: `+telefono+`</h3><h3>Email: `+email+`</h3><h3>Comentario:`+area+`</h3>`
    })
    _.delay(function() {
        res.redirect('/')
    }, 2000);
});
router.get('*', (req, res) => {
    res.render('404.hbs')
})
module.exports = router