const movies = [{
    name: 'Jungle Cuise',
    genre: 'Adventrue',
    dirctor: 'Lukas',
    year: '2019',
    imageURL: '/img/jungle-cruise.jpeg',        
    rating: '5',
    description: "The youngest of King Triton's"
  }];
  
exports.create = (movieData) => {
    console.log(movieData);
    movies.push(movieData);
}