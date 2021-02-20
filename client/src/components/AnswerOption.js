import React from 'react'
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'

export const AnswerOption = ({
  index,
  handleChange,
  choseCorrect,
  correct,
  answers,
}) => {
  return (
    <div className='d-flex justify-content-center align-items-center mb-3'>
      <Form.Control
        placeholder={`Answer option ${index + 1}`}
        id={`answer${index}`}
        value={answers[index] || ''}
        type='text'
        className='form-control mr-2'
        onChange={(event) => handleChange(event, index)}
        maxLength='50'
      />

      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>Set this answer as correct</Tooltip>
        }
      >
        <button
          className='btn btn-sm'
          onClick={(e) => choseCorrect(e, index)}
          style={
            index === correct
              ? { backgroundColor: 'var(--main-green)' }
              : { backgroundColor: 'var(--light)' }
          }
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Set this answer as correct'
        >
          <BsCheckCircle />
          Correct
        </button>
      </OverlayTrigger>
    </div>
  )
}
