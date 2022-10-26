import { useRef, useEffect } from 'react';
import '../styles/modal.css'

export default function Modal({ id = 'modal', isOpen = true, showClose = true, showSubmit, onClose, onSubmit, children }) {
  const dialog = useRef()

  useEffect(() => {
    dialog.current = document.getElementById(id);
  })

  useEffect(() => {
    if (isOpen) {
      openModal()
    } else {
      closeModal()
    }
  }, [isOpen])

  function openModal() {
    if (dialog.current) dialog.current.showModal();
  }

  function closeModal() {
    if (dialog.current) dialog.current.close();
  }

  return (<dialog className="modal" id={id} onClose={onClose}>
    {children}
    {showSubmit && <button className="button button--blue" onClick={onSubmit}>Submit</button>}
    {showClose && <button className="button button--red" onClick={onClose}>Close</button>}
  </dialog>)
}