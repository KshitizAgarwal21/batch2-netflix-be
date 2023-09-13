const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

router.post("/getMovie", async (req, res) => {
  //calling an api to check if the user has already played that content

  //if(req.headers.authorisation)
  //call the above api

  const fres = await axios.post(
    "http://localhost:8080/currentlyviewing/currentlywatching/",
    { uid: "64e0d5871c10318263b08021" }
  );

  const item_ids = fres.data.itemId.filter((elem) => elem.id == req.body.id);

  if (item_ids.length > 0) {
    const duration = item_ids[0].duration;
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.id}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JmMzY2NDAwNmY2YzBhMWY0MWNkNWRmYzdlNTgxYSIsInN1YiI6IjY0ZDNhOGYwZGQ5MjZhMDFlYTlkMzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2M3pNrTSw2w6k8Idhwnd2Chnoojm97Or3WcLck5EkA",
        },
      }
    );
    const finalObj = result.data.results.filter(
      (elem) => elem.type == "Trailer" && elem.official
    )[0];

    finalObj.duration = duration;

    res.status(200).send(finalObj);
  } else {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.body.id}/videos?language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JmMzY2NDAwNmY2YzBhMWY0MWNkNWRmYzdlNTgxYSIsInN1YiI6IjY0ZDNhOGYwZGQ5MjZhMDFlYTlkMzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2M3pNrTSw2w6k8Idhwnd2Chnoojm97Or3WcLck5EkA",
        },
      }
    );
    const finalObj = result.data.results.filter(
      (elem) => elem.type == "Trailer" && elem.official
    )[0];

    res.status(200).send(finalObj);
  }

  //else
  //directly proceed with below
});

module.exports = router;
