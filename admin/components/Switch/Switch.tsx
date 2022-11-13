import React from 'react';
import './switch.css';

type Props = {
  options: string[],
  onSelect: (id: number) => void,
  selected: number
}

export default function Switch({ options, onSelect, selected }: Props) {
  console.log(selected)
  return (
    <div className="switch">
      {options.map((option, index) => {
        console.log(index); return <div className={`switch__option ${index === selected ? 'switch__option--selected' : ''}`} onClick={() => onSelect(index)}>
          <p>{option}</p>
        </div>
      })}
    </div>
  )
}

