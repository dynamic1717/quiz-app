const { Schema, model } = require('mongoose')

const schema = new Schema({
  question: { type: String, required: true, unique: true },
  answers: [{ type: String, required: true }],
  correct: { type: Number, required: true },
  reports: { type: Number, default: 0 },
})

module.exports = model('Quiz', schema)
