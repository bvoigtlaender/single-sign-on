import './table.css'

export default function Table({ headers, children }) {
  return (
    <div className="table">
      <div className='table__row table__row--header'>
        {headers.map((header, index) => <p className={`table__column ${header.large ? 'table__column--large' : ''}`} key={index}>{header.name}</p>)}
      </div>
      {children}
    </div>
  )
}