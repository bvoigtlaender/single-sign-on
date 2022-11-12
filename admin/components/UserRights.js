import { useEffect, useState } from 'react';

export default function UserRights({ id }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (typeof id === 'number') {
      setLoading(false)
      fetch(`http://localhost:4000/v1/user/${id}`)
        .then(response => response.json())
        .then(setUser)
        .then(() => setLoading(false))
    }
  }, [id])

  if (user) return <div>
    <h1>Access rights for {user.name}:</h1>
    <table>
      <tbody>
        {user.accessRights.map(accessRight => {
          <tr>
            {accessRight}
          </tr>
        })}
      </tbody>
    </table>
  </div>

  return <div>
    <h1>Loading...</h1>
  </div>
}