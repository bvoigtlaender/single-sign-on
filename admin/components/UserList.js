import { useState, useEffect, useRef } from 'react';
import UserListItem from './UserListItem';
import '../styles/table.css'
import '../styles/form.css'
import Modal from './Modal';
import AccessRights from './AccessRights';

export default function UserList() {
  const [users, setUsers] = useState([])
  const [showAccessRights, setShowAccessRights] = useState(false);
  const dialog = useRef()

  useEffect(() => {
    reloadUsers()
  }, [])

  function reloadUsers() {
    fetch('http://localhost:4000/v1/user')
      .then(response => response.json())
      .then(users => setUsers(users.sort((userA, userB) => userA.id - userB.id)))
  }

  useEffect(() => {
    dialog.current = document.getElementById("usermodal");
  }, [])

  function openModal() {
    if (dialog.current) dialog.current.showModal();
  }

  function closeModal() {
    if (dialog.current) dialog.current.close();
  }

  function submitForm(event) {
    event.preventDefault();
    addUser({ name: event.target.name.value, email: event.target.email.value, password: event.target.password.value })
    closeModal()
    setTimeout(() => {
      reloadUsers()
    }, 1000)
  }

  function addUser(user) {
    fetch('http://localhost:4000/v1/user', {
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 0
    user.created = true;
    setUsers([...users, user])
  }

  function onClickDelete(id) {
    fetch(`http://localhost:4000/v1/user/${id}`, {
      method: 'DELETE'
    })
    setUsers(users => users.map(user => {
      if (user.id === id) {
        user.removed = true
      }
      return user
    }))
    setTimeout(() => {
      reloadUsers()
    }, 1000)
  }

  return (
    <div className="userlist">
      <div className="table">
        <div className='table__row table__row--header'>
          <p className='table__column'>Id</p>
          <p className='table__column'>Name</p>
          <p className='table__column  table__column--large'>Email</p>
          <p className='table__column'>Password</p>
          <p className='table__column'>Actions</p>
        </div>
        {users.map(user => <UserListItem key={user.id} user={user} onClickDelete={onClickDelete} onClickAccessRights={setShowAccessRights} />)}
      </div>
      <div className="userlist__footer"><button className='button button--green' onClick={openModal}>🐣 New user</button></div>
      <Modal id="accessrights" isOpen={showAccessRights !== false} onClose={() => setShowAccessRights(false)} onSubmit={() => { }} showClose={true} showSubmit={true} >
        <AccessRights id={showAccessRights} />
      </Modal>
      <dialog id="usermodal" className='modal'>
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
            <button className='button button--red' id="cancel" onClick={closeModal} type="reset">Cancel</button>
            <button className='button button--green' type="submit">Confirm</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}