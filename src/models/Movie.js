const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'All fields are required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Incorrect characters in the field title'],
        minLength: [5, 'Title should be at least 5 characters']
    },
    genre: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Genre should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]+$/, 'Incorrect characters in the field genre'],
    },
    director: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Director should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]+$/, 'Incorrect characters in the field director'],
    },
    year: {
        type: Number,
        required: [true, 'All fields are required'],
        min: [1900, 'Year must be between 1900 and 2024'],
        max: [2024, 'Year must be between 1900 and 2024']
    },
    rating: {
        type: Number,
        required: [true, 'All fields are required'],
        min: [1, 'Rating must be between 1 and 5'],
        max: [5, 'Rating must be between 1 and 5']
    },
    description: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [20, 'Description should be at least 20 characters'],
        match: [/^[A-Za-z0-9\s]+$/, 'Incorrect characters in the field description'],
    },
    imageURL: {
        type: String,
        required: [true, 'All fields are required'],
        match: [/^https?:\/\/.+/, 'Invalid URL']
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;