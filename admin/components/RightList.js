import React, { useEffect, useState } from 'react'
import Table from './Table/Table'

export default function RightList() {
  const [rights, setRights] = useState([]);

  useEffect(() => {
    reloadRights()
  }, [])

  function reloadRights() {
    fetch('http://localhost:4000/v1/rights')
      .then(response => response.json())
      .then(rights => setRights(rights.sort((rightA, rightB) => rightA.id - rightB.id)))
  }

  const headers = [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Identifier' },
    { name: 'Actions' }
  ]

  return (
    <Table headers={headers}>
    </Table>
  )
}
