const listModel = require("./model");

const createList = body =>
  new Promise((resolve, reject) => {
    listModel
      .create({
        moviesId: body.moviesId,
        posterUri: body.posterUri,
        name: body.name,
        original_language: body.original_language
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getlistCount = () =>
  new Promise((resolve, reject) => {
    listModel
      .find()
      .then(data => resolve({ count: data.length }))
      .catch(err => reject(err));
  });

const getAllListWithPage = page =>
  new Promise((resolve, reject) => {
    listModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * 10)
      .select("_id score moviesId posterUri name vote original_language")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getTop10List = () =>
  new Promise((resolve, reject) => {
    listModel
      .find()
      .sort({ score: -1, createdAt: -1 })
      .limit(10)
      .select("_id score moviesId posterUri name vote original_language")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getDatalistById = id =>
  new Promise((resolve, reject) => {
    listModel
      .findOne({ _id: id })
      .select("_id score moviesId posterUri name vote original_language")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(data));
  });

const increaseScore = (id, score) =>
  new Promise((resolve, reject) => {
    listModel
      .update({ _id: id }, { $inc: { score: score, vote: 1 } })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createList,
  getlistCount,
  getAllListWithPage,
  getTop10List,
  getDatalistById,
  increaseScore
};
