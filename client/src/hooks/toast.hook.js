import { useState } from 'react'
import { Toast } from 'react-bootstrap'

export const useToast = () => {
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

  const showToast = (reqText) => {
    setText(reqText)
    setShow(true)
  }

  const toast = () => {
    return (
      <Toast show={show} onClose={() => setShow(false)} delay={3000} autohide>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    )
  }

  return { toast, showToast }
}
