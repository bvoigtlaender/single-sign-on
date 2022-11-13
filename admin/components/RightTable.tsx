import React, { useEffect, useState } from 'react'
import Table, { Header } from './Table/Table'

export default function RightTable() {
  const [rights, setRights] = useState([]);

  const headers: Header[] = [
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
