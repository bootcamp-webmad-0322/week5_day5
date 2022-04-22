const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    cover: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema)