const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
    },
    age: {
        type: Number,
        required: [true, 'All fields are required'],
        max: [120, 'Must be between 1 and 120'],
        min: [1, 'Must be between 1 and 120']
    },
    born: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [10, 'Should be at least 10 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
    },
    nameInMovie: {
        type: String,
        required: [true, 'All fields are required'],
        minLength: [5, 'Should be at least 5 characters'],
        match: [/^[A-Za-z0-9\s]$/, 'Incorrect characters in the field'],
    },
    castImage: {
        type: String,
        required: [true, 'All fields are required'],
        validate: {
            validator(value){
                return /^https?:\/\/.+/.test(value);
            },
            message: (props) => `${props.value} is invlid url for the castImage!`
        }
    },
    movies: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }]
})

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast