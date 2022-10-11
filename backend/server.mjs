import express from "express"
import cors from "cors"
import morgan from "morgan"
import akses from "./routes.mjs"
import "./db.mjs"

const app = express()
const port = 4000

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use("/book", akses)

app.listen(port, () => {
  console.log("Server berhasil running pada port : ", port)
})
