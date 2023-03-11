const mongoose = require('mongoose')

const connection =  (url)=>{
    // First approach to connect to the database directly by specifying the URI in this file
    // await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.0eowvto.mongodb.net/?retryWrites=true&w=majority`,(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log('Connection successful');
    //     }
    // })
    mongoose.connect(url).then(()=>{
        console.log('Connected to the database');
    }).catch((err)=>{
        console.log(err);
        console.log('Error connecting to the database');
    })
}

module.exports = connection




