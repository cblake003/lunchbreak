import React, { useEffect } from 'react';
import OptionValue from './OptionValue';

export default function Option({ options }) {

  return (
    <div>
      {options?.length > 0 ? (
        options.map((option) => (
          <div key={option.id}>
            <h4>{option.name}</h4>
            {/* <OptionValue optionId={option.id} /> */}
          </div>
        ))
      ) : (
        <p>No options to display</p>
      )}
    </div>
  )
};