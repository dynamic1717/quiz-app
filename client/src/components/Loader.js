import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '100px', color: 'var(--main-green)' }}
    >
      <Spinner animation='grow' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}
