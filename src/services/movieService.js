const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventrue',
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

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};