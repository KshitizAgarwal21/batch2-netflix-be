const express = require("express");
const router = express.Router();
const { HeroMovie, TopMovies } = require("./Schema/MoviesSchema");
const jwt = require("jsonwebtoken");

router.get("/bannermovie", async (req, res) => {
  const getHeroMovie = await HeroMovie.find({});

  let latestDate = new Date(
    Math.max(...getHeroMovie.map((e) => new Date(e.releaseDate)))
  );

  latestDate = latestDate.toISOString().substring(0, 10);

  const result = getHeroMovie.filter(
    (elem) => elem.releaseDate.toISOString().substring(0, 10) == latestDate
  );

  res.status(200).send({ result: result[0] });
});

router.get("/topMovies", async (req, res) => {
  try {
    const getTopMovies = await TopMovies.findOne({});
    const movieObj = JSON.stringify(getTopMovies);
    const movieObjparse = JSON.parse(movieObj);

    if (movieObjparse.topMovies) {
      res.status(200).send(movieObjparse.topMovies.results);
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/popularMovies", async (req, res) => {
  try {
    const getTopMovies = await TopMovies.findOne({});
    const movieObj = JSON.stringify(getTopMovies);
    const movieObjparse = JSON.parse(movieObj);

    if (movieObjparse.popularMovies) {
      res.status(200).send(movieObjparse.popularMovies.results);
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/nowPlaying", async (req, res) => {
  try {
    const getTopMovies = await TopMovies.findOne({});
    const movieObj = JSON.stringify(getTopMovies);
    const movieObjparse = JSON.parse(movieObj);

    if (movieObjparse.nowPlaying) {
      res.status(200).send(movieObjparse.nowPlaying.results);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
