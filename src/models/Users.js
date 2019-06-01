const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
//const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const UsersSchema = new Schema({
  nombre: String,
  apellido: String,
  usuario: String,
  email: String,
  password: String
});


UsersSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
};

UsersSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
};
/*
UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return this.generateJWT();
};

*/
module.exports = mongoose.model('Users', UsersSchema);