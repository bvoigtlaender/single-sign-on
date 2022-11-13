import React, { JSXElementConstructor, ReactEventHandler } from 'react'
import { TableUser } from './UserTable'

type Props = {
  user: TableUser,
  onClickDelete: (id: number) => void,
  onClickShowRights: (id: number) => void
}

export default function UserListItem({ user, onClickDelete, onClickShowRights }: Props) {
  const { id, name, email, password, created, deleted } = user

  return (
    <div className={`table__row ${deleted ? 'table__row--removed' : ''} ${created ? 'table__row--created' : ''}`}>
      <p className="table__column">{created ? '…' : id}</p>
      <p className="table__column">{name}</p>
      <p className="table__column table__column--large">{email}</p>
      <p className="table__column">{password}</p>
      <div className="table__column">
        <div className="table__action table__action--delete" onClick={() => onClickDelete(id)}>🗑️ Delete</div>
        <div className="table__action table__action--accessrights" onClick={() => onClickShowRights(id)}>🔒 Rights</div>
      </div>
    </div>
  )
}