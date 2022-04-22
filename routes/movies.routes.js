const router = require("express").Router()

const fileUploader = require("../config/cloudinary.config")
const Movie = require("../models/Movie.model")


router.get("/crear", (req, res, next) => {
  res.render("movies/create")
})


router.post("/crear", fileUploader.single('movieCoverFile'), (req, res, next) => {
  const { title } = req.body
  const { path } = req.file

  console.log('EL OBJECT DE MULTER', req.file)

  Movie
    .create({ title, cover: path })
    .then(() => res.redirect('/peliculas/galeria'))
    .catch(err => next(err))
})


router.get("/galeria", (req, res, next) => {
  Movie
    .find()
    .then(movies => res.render('movies/gallery', { movies }))
    .catch(err => next(err))
})



module.exports = router