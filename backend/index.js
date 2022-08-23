const express = require("express")//express server
const app = express()//app object
const bodyParser = require("body-parser")//request body parser
const PORT = process.env.PORT || 3000 // port on which the server is running
const db = require("./models/")
app.use(bodyParser.json());//using json to handle data payload

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})