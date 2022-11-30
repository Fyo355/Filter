const router = require("express").Router();
const { getItems } = require("../controllers/movies");
//const Genre = require("../models/genre");
//const genres = require("../config/genre");

router.get("/movies", getItems);

/*
const insertGenres = async () => {
  try {
    const docs = await Genre.insertMany(genres);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};

insertGenres()
  .then((docs) => console.log(docs))
  .catch((err) => console.error(err));
*/
module.exports = router;
