import React from 'react'

export const Result = ({ isCorrect, setIsAnswered, fetchRandomQuiz }) => {
  return (
    <div className='card result'>
      {isCorrect ? (
        <h2 style={{ color: 'var(--main-green)' }}>Correct answer!</h2>
      ) : (
        <h2 style={{ color: 'var(--main-red)' }}>Wrong answer</h2>
      )}
      <div>
        {!isCorrect && (
          <button
            className='btn btn-main mr-2'
            onClick={() => setIsAnswered(false)}
          >
            Try Again
          </button>
        )}
        <button className='btn btn-main' onClick={fetchRandomQuiz}>
          Get Another
        </button>
      </div>
    </div>
  )
}
