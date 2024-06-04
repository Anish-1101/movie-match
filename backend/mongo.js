const mongoose = require("mongoose")
const url = "mongodb+srv://Anish:jaitra123@movie-match.nbbfiaj.mongodb.net/test";
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB:', err));


const newSchema= new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:false
    },
})

const collection = mongoose.model("collection", newSchema)

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    streamingPlatforms: {
        type: [String], 
        required: true
    }
});

const movieCollection = mongoose.model("movies", movieSchema);

module.exports = { collection, movieCollection };