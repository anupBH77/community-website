const mongoose = require('mongoose');
async function connectToDb()
{mongoose.connect('mongodb://127.0.0.1:27017/project-community')
const db=  mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'))
db.once('open',()=>{
    console.log('Connected to the database!');
})}
module.exports ={
    connectToDb,
}