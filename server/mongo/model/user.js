var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    isAdmin: Boolean,
    password: String,
    createdOn: String,
    phoneNumber :String,
    orders:Array
})

module.exports = mongoose.model('User', UserSchema)