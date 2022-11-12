import './switch.css';

export default function Switch({ options, setSelected, selected }) {
  console.log(selected)
  return (
    <div className="switch">
      {options.map((option, index) => {
        console.log(index); return <div className={`switch__option ${index === selected ? 'switch__option--selected' : ''}`} onClick={() => setSelected(index)}>
          <p>{option}</p>
        </div>
      })}
    </div>
  )
}

