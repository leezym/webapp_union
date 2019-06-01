const express = require('express');
const router = express.Router();
const passport = require('passport')
const Users = require('../../models/Users')

module.exports = (router, passport) => {

  router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/profile',
    failureRedirect: '/register',
    failureFlash: true
  }))
  router.post('/login', passport.authenticate('local-login'))

  router.get('/profile', (req, res, next) => {
    res.render('profile', {
      user: req.user
    })
  })
}







/*

router.post('/register', async(req, res, next) => {
  console.log(req.body)
  const { body: user } = req;

  // Campos vacíos
  if(!user.nombre){
    return res.status(422).json({
      errors: {
        nombre: 'is required',
      },
    });
  }

  if(!user.apellido){
    return res.status(422).json({
      errors: {
        apellido: 'is required',
      },
    });
  }

  if(!user.usuario){
    return res.status(422).json({
      errors: {
        usuario: 'is required',
      },
    });
  }

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  //  Usuario existente
  const email = user.email;
  const foundUser = await Users.findOne({ email });
  if(foundUser){
    return res.status(403).send({error : 'Email is already in use'})
  }  
  const finalUser = new Users(user)

  finalUser.encryptPassword(user.password)
  finalUser.toAuthJSON()
  
  await finalUser.save()
  res.json({ user: 'created' });
});


router.post('/login', async(req, res, next) => {
  const { body: user } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const email = user.email;
  const password = user.password;
  const foundUser = await Users.findOne({ email });
  if(!foundUser || !foundUser.validatePassword(password)) {
    return res.status(403).send({error : 'email or password is invalid'});
  }else
    return res.json({foundUser})
});


router.get('/profile', async(req, res, next) => {
  const { body: id } = req;
  const foundUser = await Users.findById(id)
    if(!foundUser) {
      return res.sendStatus(400);
    }
    return res.json({user});
});


router.post('profile', async(req, res, next) => {
  if(!user.nombre){
    return res.status(422).json({
      errors: {
        nombre: 'is required',
      },
    });
  }

  if(!user.apellido){
    return res.status(422).json({
      errors: {
        apellido: 'is required',
      },
    });
  }

  if(!user.usuario){
    return res.status(422).json({
      errors: {
        usuario: 'is required',
      },
    });
  }

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  //  Usuario existente
  const id = user.id;
  const foundUser = await Users.findById({ id });
  if(foundUser){
    foundUser.nombre = user.nombre
    foundUser.apellido = user.apellido
    foundUser.usuario = user.usuario
    foundUser.email = user.email
    foundUser.password = user.password 
  }
})



router.get('/prueba', async(req, res) => {
  const user = await Users.find();
  res.json(user);
})

router.post('/prueba', async(req, res) => {
  //const user = new Users (req.body);
  console.log(req.body);
  res.json('todo bien');
})

module.exports = router

*/