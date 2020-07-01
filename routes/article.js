const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//REQUEST ALL POST
router.get("/", (req, res) => {
    Article.find({}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.json(data);
        }
    })
});

//ADD NEW POST
router.post("/add", (req, res) => {

    const article = new Article({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    article
        .save()
        .then(article => res.json(article))
        .catch(() => res.json({"error": "fail to post data"}));
});

//GET ONE POST
router.get("/:id", (req, res) => {
    Article
        .findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json("article is not founded"));
});

//UPDATE POST
router.put("/update/:id", (req, res) => {
    Article
        .findById(req.params.id)
        .then(article => {
            article.title = req.body.title;
            article.article = req.body.article;
            article.authorname = req.body.authorname;

            article
                .save()
                .then(()=>res.json("the article is updated successful"))
                .catch(err => res.status(400).json("fail to update post"))
        })
})

//DELETE article
router.delete("/:id", (req, res) => {
    Article
        .findByIdAndDelete(req.params.id)
        .then(() => res.json("article deleted successful...."))
        .catch( err => res.status(400).json("failed to deleted. "))
})




module.exports = router;