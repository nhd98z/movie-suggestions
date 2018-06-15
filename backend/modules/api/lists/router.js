const express = require("express");
const router = express.Router();

const listController = require("./controller");

router.post("/", (req, res) => {
  listController
    .createList(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

router.get("/count", (req, res) => {
  listController
    .getlistCount()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

router.get("/", (req, res) => {
  let page = req.query.page ? req.query.page : 1;
  listController
    .getAllListWithPage(page)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

router.get("/top10", (req, res) => {
  listController
    .getTop10List()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

router.get("/:id", (req, res) => {
  listController
    .getDatalistById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

router.put("/:id", (req, res) => {
  listController
    .increaseScore(req.params.id, req.body.score)
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
