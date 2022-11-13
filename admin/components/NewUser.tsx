import React, { useState } from 'react'
import { UserForm } from '../types/User';
import Modal from './Modal'

type Props = {
  onSubmit: (user: UserForm) => void
}

export default function NewUser({ onSubmit }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);

  function submitForm(event: any) {
    event.preventDefault()
    onSubmit({ name: event.target.name.value, email: event.target.email.value, password: event.target.password.value })
  }

  return <>
    <button className='button button--green' onClick={() => setShowModal(true)}>🐣 New user</button>
    <Modal id="usermodal" isOpen={showModal} onClose={() => setShowModal(false)} >
      <form className='form' method="form" onSubmit={submitForm}>
        <div className="form__row">
          <label htmlFor="name" className='form__label'>Name: </label>
          <input type="text" name="name" id="name" className='form__input' />
        </div>
        <div className="form__row">
          <label htmlFor="email" className='form__label'>Email: </label>
          <input type="email" name="email" id="email" className='form__input' />
        </div>
        <div className="form__row">
          <label htmlFor="password" className='form__label'>Password: </label>
          <input type="password" name="password" id="password" className='form__input' />
        </div>
        <div className='buttonrow'>
          <button className='button button--red' id="cancel" onClick={() => setShowModal(false)} type="reset">Cancel</button>
          <button className='button button--green' type="submit">Confirm</button>
        </div>
      </form>
    </Modal>
  </>
}