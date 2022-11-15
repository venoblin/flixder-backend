const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }]
  },
  { timestamps: true }
)

module.exports = userSchema
