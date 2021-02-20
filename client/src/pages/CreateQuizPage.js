import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { AnswerOption } from '../components/AnswerOption'
import { Form } from 'react-bootstrap'
import { useToast } from '../hooks/toast.hook'
import axios from 'axios'

export const CreateQuizPage = () => {
  const { toast, showToast } = useToast()
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [count, setCount] = useState(2)
  const [correct, setCorrect] = useState(null)

  const changeCount = () => {
    let newCount = count + 1
    setCount(newCount)
  }

  const handleChange = (event, index) => {
    const newAnswers = [
      ...answers.slice(0, index),
      event.target.value,
      ...answers.slice(index + 1),
    ]
    setAnswers(newAnswers)
  }

  const choseCorrect = (e, index) => {
    e.preventDefault()
    setCorrect(index)
  }

  const createHandler = async () => {
    const formattedQuestion = question.trim()
    if (formattedQuestion && correct >= 0 && answers.length >= 2) {
      try {
        const data = await axios.post('/api/quiz/create', {
          question,
          answers,
          correct,
        })
        console.log('Data', data.data)
        setQuestion('')
        setAnswers([])
        setCount(2)
        setCorrect(null)
        showToast('Quiz has been created!')
      } catch (error) {
        console.log(error)
      }
    } else {
      showToast('You did not complete the fields')
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1>Create a quiz</h1>

      <div className='card mb-3' style={{ width: '60%' }}>
        <div className='card-body text-center'>
          <Form>
            <Form.Group controlId='question'>
              <Form.Control
                as='textarea'
                placeholder='Enter your question'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ height: '100px', resize: 'none' }}
                maxLength={300}
                required='true'
              />
            </Form.Group>

            {Array.from(Array(count)).map((item, index) => {
              return (
                <AnswerOption
                  key={index}
                  index={index}
                  handleChange={handleChange}
                  choseCorrect={choseCorrect}
                  correct={correct}
                  answers={answers}
                />
              )
            })}
          </Form>

          {count < 5 && (
            <button className='btn btn-outline' onClick={changeCount}>
              <BsPlusCircle />
              &nbsp;Add another answer option
            </button>
          )}
        </div>
      </div>

      <button
        type='submit'
        className='btn btn-lg btn-main'
        onClick={createHandler}
      >
        Create This Quiz
      </button>
      <div className='toast-wrapper'>{toast()}</div>
    </div>
  )
}
