import mongoose from "mongoose"

const Schema = mongoose.Schema

const BookSchema = new Schema(
  {
    judul: { type: String, required: true },
    pengarang: { type: String, required: true },
  },
  {
    collection: "koleksiBuku",
  }
)

export const bookSchema = mongoose.model("BukuModel", BookSchema)
