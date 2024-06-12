const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'All fields are required'],
        match: [/^[A-Za-z0-9\s]+$/, 'Incorrect characters in the field'],
        minLength: [5, 'Should be at least 5 characters']
    },
    genre: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
    },
    director: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
    },
    year: {
        type: Number,
        required: [true, 'All fields are required'],
        min: [1900, 'Must be between 1900 and 2024'],
        max: [2024, 'Must be between 1900 and 2024']
    },
    rating: {
        type: Number,
        required: [true, 'All fields are required'],
        min: [1, 'Must be between 1 and 5'],
        max: [5, 'Must be between 1 and 5']
    },
    description: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [20, 'Should be at least 20 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
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