const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  //   userid: {
  //     type: String,
  //     required: true,
  //   },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  releaseDate: {
    type: Date,
    required: true,
  },
});

const schema2 = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
});
const schema3 = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
  imdbRating: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },

  actors: {
    mainLead: {
      male: {
        type: String,
        required: true,
      },
      female: {
        type: String,
        required: true,
      },
    },

    supporting: {
      male: {
        type: String,
        required: true,
      },
      female: {
        type: String,
        required: true,
      },
    },
  },
});

const schema4 = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  itemId: {
    type: Array,
  },

  //series -> season # && episode # && duartion watched

  //movies -> duration watched
});

const HeroMovie = mongoose.model("heromovie", schema);
const TopMovies = mongoose.model("topmovie", schema2);
const CurrentlyWatching = mongoose.model("currentlyWatching", schema4);
// const MovieDetails = mongoose.model("moviedetail", schema3);
module.exports = { HeroMovie, TopMovies, CurrentlyWatching };
