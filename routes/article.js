const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get("/", (req, res) => {
    Article.find({}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.json(data);
        }
    })
});

router.post("/", (req, res) => {

    const article = new Article({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    console.log(article);

    article
        .save()
        .then(article => res.json(article))
        .catch(() => res.json({"error": "fail to post data"}));
});


module.exports = router;