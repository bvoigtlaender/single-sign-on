import React, { useRef, useEffect, MouseEventHandler, ReactEventHandler } from 'react';
import '../styles/modal.css'

type Props = {
  id: string,
  isOpen: boolean,
  showClose?: boolean,
  showSubmit?: boolean,
  onClose: ReactEventHandler,
  children: React.ReactNode
}

export default function Modal({ id, isOpen, showClose = true, showSubmit = false, onClose, children }: Props) {
  const dialog = useRef<HTMLDialogElement | null>()

  useEffect(() => {
    dialog.current = document.getElementById(id) as HTMLDialogElement;
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
  </dialog>)
}