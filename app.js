var express = require("express");
var app = express();

var routes = require("./routes");

var path = require("path");

//telling express that static path is in public directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", routes.home);
app.get("/star_wars_episode/:episode_number?", routes.movie_single);
app.get("*", routes.notFound);

//dev environment
app.listen(process.env.PORT || 3000);

