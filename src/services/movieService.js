const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

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
    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    // it can be done in one row
    await Cast.findByIdAndUpdate(castId, {$push: {movies: movieId}})
    return await Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}})
    
    // or in more complicated way
    // const movie = await this.getOne(movieId);
    // const cast = await Cast.findById(castId);
    // this is optional to populate movies to a cast
    // movie.casts.push(cast);
    // cast.movies.push(movie);
    // await movie.save();
    // await cast.save();
    // return movie;
}