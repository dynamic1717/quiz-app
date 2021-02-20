import React, { useEffect, useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { Result } from '../components/Result'
import { useToast } from '../hooks/toast.hook'
import { Loader } from '../components/Loader'
import axios from 'axios'

export const RandomQuizPage = () => {
  const { toast, showToast } = useToast()
  const [quiz, setQuiz] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isReported, setIsReported] = useState(false)

  const fetchRandomQuiz = async () => {
    setIsCorrect(false)
    setIsAnswered(false)
    setIsReported(false)
    setQuiz(null)
    try {
      const fetched = await axios.get('/api/quiz/random')
      setQuiz(fetched.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  const checkAnswer = (index) => {
    if (index === quiz.correct) {
      setIsCorrect(true)
    }
    setIsAnswered(true)
  }

  const handleReport = async () => {
    try {
      await axios.post('/api/quiz', quiz)
    } catch (error) {
      console.log(error)
    }
    setIsReported(true)
    showToast('Quiz reported')
  }

  useEffect(() => {
    fetchRandomQuiz()
  }, [])

  return (
    <>
      <h1>Random Quiz</h1>
      <div className='card text-center'>
        {quiz ? (
          <div className='card-body'>
            <h3 className='mb-3'>{quiz.question}</h3>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              {quiz.answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => checkAnswer(index)}
                    disabled={isAnswered}
                    type='button'
                    className='btn btn-outline mb-3'
                    style={{ height: '50px' }}
                  >
                    {answer}
                  </button>
                )
              })}
            </div>

            <button className='btn btn-main' onClick={fetchRandomQuiz}>
              Get Another
            </button>

            <button
              className='btn btn-report'
              onClick={handleReport}
              disabled={isReported}
            >
              <BsExclamationCircle />
              &nbsp;report
            </button>
          </div>
        ) : (
          <Loader />
        )}

        {isAnswered && (
          <Result
            isCorrect={isCorrect}
            setIsAnswered={setIsAnswered}
            fetchRandomQuiz={fetchRandomQuiz}
          />
        )}
      </div>
      <div className='toast-wrapper'>{toast()}</div>
    </>
  )
}
