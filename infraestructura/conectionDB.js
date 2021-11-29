const mongoose = require('mongoose')

const urlDB ='mongodb+srv://admin:1234@cluster0.vaa2a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd")
})
