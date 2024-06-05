const Movie = require('../models/Movie')

exports.getAll = () => Movie.find();

exports.getOne = (movieId) => Movie.findById(movieId);

// TODO:Filter result in mongoDB
exports.search = async (title, genre, year) => {
result = await Movie.find().lean()

    if(title){
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    };

    if(genre){
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    };

    if(year){
        result = result.filter(movie => movie.year === year);
    }

    return result
}

exports.create = (movieData) => Movie.create(movieData);

exports.attach = async (movieId, castId) => {
    return await Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}})
}