import { useState, useEffect } from 'react'

export default function Table({ data }) {
  const [input, setInput] = useState({})

  useEffect(() => {
    if (data.length > 0) setInput(Object.keys(data[0]).reduce((acc, curr) => (acc[curr] = '', acc), {}))
  }, [data])

  useEffect(() => {
    console.log(`input changed to`, input)
  }, [input])

  return (<table border="1">
    <thead>
      {data.length > 0 && (
        <tr>
          {Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
        </tr>
      )}
    </thead>
    <tbody>
      {data.map((row, index) => <tr key={index}>
        {Object.values(row).map((column, index) => <td key={index}>{column}</td>)}
      </tr>)}
    </tbody>
    <tfoot>
      {Object.keys(input).length > 0 && (
        <tr>
          {Object.keys(input).map(key => <td key={key}><input onChange={event => setInput({ ...input, [key]: event.target.value })}></input></td>)}
        </tr>
      )}
    </tfoot>
  </table>)
}