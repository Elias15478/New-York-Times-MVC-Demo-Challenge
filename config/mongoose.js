const mongoose = require('mongoose')

const db = 'mongodb+srv://Timeline:MDBtimeline@cluster0.v01d8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db)
.then(() => console.log('connected to DB'))
.catch(err => console.log(err))
