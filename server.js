const path = require("path")
const chalk = require("chalk")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(PORT, () =>
  console.log(chalk.bgBlue(`Now listening on PORT :${PORT}`))
)
