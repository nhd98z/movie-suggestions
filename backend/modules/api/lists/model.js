const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listModel = new Schema(
  {
    moviesId: [{ type: Number, required: true }],
    posterUri: [{ type: String,  required: true }],
    // title: [{ type: String, required: true }],    
    // release_date: [{ type: String, required: true }],
    // overview: [{ type: String, required: true }],
    // genres: [{ type: String, required: true }],
    // actor: [{ type: String, required: true }],
    // vote_average: [{ type: Number, required: true }],
    // homepage: [{ type: String, required: true }],
    //abc
    original_language : [{type : String, requied : true}],
    name: { type: String, requied: true },
    score: { type: Number, default: 0 },
    vote: { type: Number, default: 0 }
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("lists", listModel);
