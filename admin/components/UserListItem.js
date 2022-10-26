export default function UserListItem({ user, onClickDelete, onClickAccessRights }) {
  const { id, name, email, password, created, removed } = user

  return (
    <div className={`table__row ${removed ? 'table__row--removed' : ''} ${created ? 'table__row--created' : ''}`}>
      <p className="table__column">{created ? '…' : id}</p>
      <p className="table__column">{name}</p>
      <p className="table__column table__column--large">{email}</p>
      <p className="table__column">{password}</p>
      <div className="table__column">
        <div className="table__action table__action--delete" onClick={() => onClickDelete(id)}>🗑️ Delete</div>
        <div className="table__action table__action--accessrights" onClick={() => onClickAccessRights(id)}>🔒 Rights</div>
      </div>
    </div>
  )
}