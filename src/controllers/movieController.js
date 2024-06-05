const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;
    try {
        await movieService.create(newMovie)
        res.redirect('/')

    }catch(err){
        console.log(err.message)
        res.redirect('/create')

    }
});

router.get('/movies/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    // TODO: to be changed with handlebars helpers
    movie.ratingStars = '&#x2605'.repeat(movie.rating);
    res.render('details', {movie});
});


module.exports = router;