const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const db = require("./config/db")
const cors = require("cors")
require("colors")
db()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/blog", require("./routes/Blogrountes"))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Severer running http://localhost:${PORT}`.bgYellow))