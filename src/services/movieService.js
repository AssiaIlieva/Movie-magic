const Movie = require('../models/Movie')

const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    dirctor: 'Lukas',
    year: '2019',
    imageURL: '/img/jungle-cruise.jpeg',        
    rating: '5',
    description: "The youngest of King Triton's"
  }];

exports.getAll = () => {
    return movies.slice();
};

exports.getOne = (movieId) => {
    const movie = movies.find(m => m._id == movieId);
    return movie;
}

exports.search = (title, genre, year) => {
result = movies.slice();

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

exports.create = async (movieData) => {
    const result = await Movie.create(movieData);
    return result;
};