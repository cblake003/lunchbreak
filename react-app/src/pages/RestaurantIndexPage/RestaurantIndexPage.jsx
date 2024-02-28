import React from "react";
import { useState } from "react";
import RestaruantIndexComponent from "../../components/RestaurantIndexComponent/RestaurantIndexComponent";
import DateSelector from "../../components/DateSelector/DateSelector";
import { Link } from 'react-router-dom'

export default function RestaurantIndexPage() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="restaurant_index">
      <DateSelector onDateSelected={setSelectedDay} />
      <br></br>
      <div className="mt-4 text-lg font-bold text-black-700">Restaurants</div>
      <RestaruantIndexComponent selectedDay={selectedDay} />
      <br></br>
    </div>
  );
}
