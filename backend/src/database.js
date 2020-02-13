import mongoose from 'mongoose'

mongoose.connect('mongodb://zerobala:zerobala@cluster0-shard-00-00-pkdsr.mongodb.net:27017,cluster0-shard-00-01-pkdsr.mongodb.net:27017,cluster0-shard-00-02-pkdsr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => error ? console.log('connection to the database have failed') : console.log('connection success'))