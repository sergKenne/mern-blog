const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const cors = require('cors');

const routeArticle = require("./routes/article");

const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/mern_blog", {
     useUnifiedTopology: true ,
     useNewUrlParser: true
    });
const db = mongoose.connection;
db.once("open", ()=> {
    console.log("database connected sucessfull...")
});
db.on("error", () => {
    console.log("fail to connected on  database");
})

app.use(cors());
app.use(express.json());

app.use("/articles", routeArticle);


app.listen(PORT, () => console.log(`server is running in the port ${PORT}`))