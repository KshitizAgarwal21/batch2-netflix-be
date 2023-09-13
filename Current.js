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

router.post("/addCurrent", async (req, res) => {
  const uid = "64e0d5871c10318263b08021";

  const alreadyWatched = await CurrentlyWatching.findOneAndUpdate(
    { userId: uid, itemId: { $elemMatch: { id: req.body.id } } },
    { $set: { "itemId.$.duration": req.body.durationWatched } }
  );
  if (alreadyWatched) {
    res.status(200).send(" movie duration updated in currently watching");
  }
  if (!alreadyWatched) {
    const userData = await CurrentlyWatching.findOneAndUpdate(
      { userId: uid },
      {
        $push: {
          itemId: { id: req.body.id, duration: req.body.durationWatched },
        },
      }
    );
    if (userData) {
      res.status(200).send("new movie added to currently watching");
    }
  }

  //   console.log(userData);
});
module.exports = router;
