import React from 'react'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <div className='text-center d-flex flex-column justify-content-center align-items-center'>
      <h1>Welcome!</h1>
      <div className='card' style={{ width: '70%' }}>
        <div className='card-body'>
          <h5 className='card-title'>
            Create your own quizzes and answer other users' quizzes!
          </h5>
          <p>
            By clicking on *Get Random Quiz* you get a random quiz and try to
            answer it. If there is questionable content in the quiz or if you
            are sure that the result is incorrect, you can report the quiz.
            <br />
            <br />
            With the *Create a Quiz* button you can create a quiz with your
            question and answer options. Among the answers you have entered,
            choose the one that is correct. Once you have filled in all the
            fields, upload the quiz.
          </p>
          <div className='d-flex justify-content-center align-items-center'>
            <Link to='/random' className='btn btn-lg btn-main mr-4'>
              Get Random Quiz
            </Link>
            <Link to='/create' className='btn btn-lg btn-main'>
              Create a Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
