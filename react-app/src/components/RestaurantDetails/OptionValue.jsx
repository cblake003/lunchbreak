import React, { useEffect } from 'react';
import { useState } from 'react';

export default function OptionValue({ option }) {

  const[selected, setSelected] = useState(option.is_multiple ? [] : null);

  // will need to pass option value up to parent component
  // right now, the parent component isn't keeping track of which option value is being selected for the specific menu item - need to pass that information up
  // going to need to keep track of what is required to select - render a UI for perhaps a red asterisk or (required) in small text; if that's selected, then the UI would show that it was selected

  const handleChange = (event, valueName, isChecked) => {
    event.stopPropagation();

    if (option.is_multiple){
      if(isChecked){
        setSelected(prevSelected => [...prevSelected, valueName]);
    } else {
      setSelected(prevSelected => prevSelected.filter(item => item !== valueName));
    }
  } else {
    setSelected(isChecked ? valueName : null);
  } 
  };

  return (
    <div>
      <h4>{option.name}</h4>
      {option.values.map(value => (
        <div key={value.id}>
          {option.is_multiple ? (
            <input
              type="checkbox"
              id={`${option.id}-${value.id}`}
              name={value.name}
              value={value.name}
              checked={selected.includes(value.name)}
              onChange={(e) => handleChange(e, value.name, e.target.checked)}
            />
          ) : (
            <input
            type="radio"
            id={`${option.id}-${value.id}`}
            name={option.name}
            value={value.name}
            checked={selected === value.name}
            onChange={(e) => handleChange(e, value.name, e.target.checked)}
          />
          )}
          <label htmlFor={`${option.id}-${value.id}`}>{value.name}</label>
        </div>
      ))}
    </div>
  );
}
