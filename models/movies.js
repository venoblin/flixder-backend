const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    tmdb_id: { type: Number, required: true },
    poster_path: { type: String },
    backdrop_path: { type: String },
    title: { type: String, required: true },
    release_date: { type: String, required: true },
    overview: { type: String, required: true },
    vote_average: { type: Number, required: true },
    vote_count: { type: Number, required: true },
    genre_ids: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
  },
  { timestamps: true }
)

module.exports = movieSchema
