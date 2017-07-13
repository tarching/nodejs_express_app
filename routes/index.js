
var moviesJSON = require("../movies.json")

exports.home = function (req, resp) {
    //resp.send("This is a server response on the home page");

    var movies = moviesJSON.movies;

    resp.render("home", {
        title: "Star Wars Movies",
        movies: movies
    });
};

exports.movie_single = function (req, resp) {

	var movies = moviesJSON.movies;
    var episode_number = req.params.episode_number;

    if (episode_number >=1 && episode_number <= 6)
    {
	    var movie = movies[episode_number - 1 ];
	    var title = movie.title;
	    var main_characters = movie.main_characters;
	    //resp.send("This is the page for episode " + episode_number);
	    resp.render("movie_single",{
	    	movies : movies,
	    	title : title,
	    	movie : movie,
	    	main_characters : main_characters
	    	 });
    }
    else
    {
    	resp.render("notFound",{
    		movies : movies,
    		title : "This is not the page you are looking for"
    	});
    }

   


};
exports.notFound = function (req, resp) {
    var movies = moviesJSON.movies;

    resp.render("notFound",{
    	movies : movies,	
    	title : "This is not the page you are looking for"
    });
};


