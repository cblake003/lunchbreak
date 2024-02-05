import React from "react";
import RestaruantIndexCard from "../../components/RestaurantIndexCard/RestaurantIndexCard";
import DateSelector from "../../components/DateSelector/DateSelector";

export default function RestaurantIndexPage() {
  return (
    <div className="restaurant_index">
      <DateSelector />
      <br></br>
      <div className="mt-4 text-lg font-bold text-black-700">Restaurants</div>
      <RestaruantIndexCard />
    </div>
  );
}
