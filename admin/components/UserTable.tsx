import React, { useState, useEffect, useRef } from 'react';
import UserListItem from './UserTableItem';
import '../styles/form.css'
import Modal from './Modal';
import UserRights from './UserRights';
import Table, { Header } from './Table/Table';
import NewUser from './NewUser';
import { User, UserForm } from '../types/User';

export type TableUser = User & {
  created?: boolean,
  deleted?: boolean,
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([])
  const [showAccessRights, setShowAccessRights] = useState<number | boolean>(false);

  useEffect(() => {
    reloadUsers()
  }, [])

  async function reloadUsers() {
    const response = await fetch('http://localhost:4000/v1/users')
    const users: User[] = await response.json()
    setUsers(users.sort((userA, userB) => userA.id - userB.id))
  }

  async function createUser(user: UserForm) {
    const response = await fetch('http://localhost:4000/v1/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const newUser: TableUser = await response.json()
    newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 0
    newUser.created = true;
    setUsers([newUser, ...users])
    setTimeout(() => {
      reloadUsers()
    }, 1000)

  }

  async function deleteUser(id: number) {
    setUsers(users => users.map(user => {
      if (user.id === id) {
        user.deleted = true
      }
      return user
    }))
    const response = await fetch(`http://localhost:4000/v1/users/${id}`, { method: 'DELETE' })
    setUsers(users => users.filter(user => user.id !== id))
    setTimeout(() => {
      reloadUsers()
    }, 1000)
  }

  const headers: Header[] = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Email', large: true },
    { name: 'Password' },
    { name: 'Actions' }
  ]

  return (
    <div className="userlist">
      <Table headers={headers} >
        {users.map(user => <UserListItem key={user.id} user={user} onClickDelete={deleteUser} onClickShowRights={setShowAccessRights} />)}
      </Table>
      <div className="userlist__footer">
        <NewUser onSubmit={createUser} />
      </div>
      <Modal id="accessrights" isOpen={showAccessRights !== false} onClose={() => setShowAccessRights(false)} showClose={true} showSubmit={true} >
        <UserRights id={showAccessRights} />
      </Modal>
    </div>
  )
}