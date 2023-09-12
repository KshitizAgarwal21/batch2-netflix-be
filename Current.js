const express = require("express");
const { CurrentlyWatching } = require("./Schema/MoviesSchema");
const router = express.Router();

router.post("/currentlywatching", async (req, res) => {
  const uid = "64e0d5871c10318263b08021"; //req.headers.authorisation

  try {
    const MyMovies = await CurrentlyWatching.findOne({ userId: uid });
    if (MyMovies) {
      res.status(200).send(MyMovies);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
