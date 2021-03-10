const mongoose = require('mongoose')
const uri = "mongodb+srv://Nitheesh:Nitheesh@clusternitheesh-cbczs.mongodb.net/Nitheeshdb?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
     useUnifiedTopology: true
}); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose