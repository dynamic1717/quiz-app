const { Router } = require('express')
const Quiz = require('../models/Quiz')

const router = Router()

router.post('/create', async (req, res) => {
  try {
    const { question, answers, correct } = req.body

    const candidate = await Quiz.findOne({ question })
    if (candidate) {
      return res.status(400).json({ message: 'Quiz already exists' })
    }

    const quiz = new Quiz({ question, answers, correct })
    await quiz.save()

    res.status(201).json({ message: 'Quiz has been created' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get('/random', async (req, res) => {
  try {
    const random = await Quiz.aggregate([{ $sample: { size: 1 } }])
    res.json(random)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
})

router.post('/', async (req, res) => {
  try {
    const reported = await Quiz.findById(req.body._id)
    reported.reports++
    await reported.save()
    res.status(200).json('reported')
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router
