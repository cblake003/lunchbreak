import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi'; // Adjust the path as necessary
import api from '../../utilities/user-services'; // Ensure this is correctly imported

export default function OptionValue({ optionId }) {
  const { data: optionValues, error, loading, request } = useApi();

  // useEffect(() => {

  //   request(api.get, `/option-values/?optionId=${optionId}`);
  // }, [optionId, request]);

  // if (loading) return <p>Loading option values...</p>;
  // if (error) return <p>Error fetching option values: {error.message}</p>;

  return (
    <></>
    // <div>
    //   {optionValues?.length > 0 ? (
    //     optionValues.map((value) => (
    //       <div key={value.id}>
    //         <span>{value.value}</span>
    //         {value.additional_cost > 0 && (
    //           <span> (+${value.additional_cost})</span>
    //         )}
    //       </div>
    //     ))
    //   ) : (
    //     <p>No option values to display</p>
    //   )}
    // </div>
  );
}
