import { bookSchema } from "./model.mjs"
import express from "express"

const akses = express.Router()

akses.route("/").get((req, res) => {
  bookSchema
    .find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message))
})

akses.route("/delete/:id").delete((req, res) => {
  bookSchema
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku dihapus..."))
    .catch((error) => res.status(400).json(error.message))
})

akses.route("/update/:id").put((req, res) => {
  bookSchema
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message))
})

akses.route("/add").post((req, res) => {
  bookSchema
    .create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message))
})

export default akses
