const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

// TODO:Filter result in mongoDB
exports.search = (title, genre, year) => {
    let query = {}

    if(title){
        query.title = new RegExp(title, 'i');
    };

    if(genre){
        query.genre = new RegExp(genre, 'i');
    };

    if(year){
        query.year = year;
    }

    return Movie.find(query);
}

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData);

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
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);