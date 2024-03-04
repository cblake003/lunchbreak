import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';
import OptionValue from './OptionValue';

export default function Option({ menuItemId }) {
  const { data: options, error, loading, request } = useApi();

  useEffect(() => {

    request(api.get, `/options/?menuItemId=${menuItemId}`);
  }, [menuItemId, request]);

  if (loading) return <p>Loading options...</p>;
  if (error) return <p>Error fetching options: {error.message}</p>;

  return (
    <div>
      {options?.length > 0 ? (
        options.map((option) => (
          <div key={option.id}>
            <h4>{option.name}</h4>
            <OptionValue optionId={option.id} />
          </div>
        ))
      ) : (
        <p>No options to display</p>
      )}
    </div>
  )
};