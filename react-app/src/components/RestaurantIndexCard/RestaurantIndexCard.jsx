import React from "react";

export default function RestaurantIndexCard() {
  return (
    <div>
      <div className="restaurant_card">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://i.imgur.com/U2vy2uy.jpg"
                  alt="Starbird Restaurant Logo"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-lg font-bold text-gray-700">Starbird</h3>
              <p class="mt-1 text-md font-medium text-gray-900">View Menu</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://i.imgur.com/UhdbatW.jpg"
                  alt="Mendocino Farms Logo"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-lg font-bold text-gray-700">
                Mendocino Farms
              </h3>
              <p class="mt-1 text-md font-medium text-gray-900">View Menu</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://i.imgur.com/2vhUqXW.png"
                  alt="Red Lobster Logo"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-lg font-bold text-gray-700">Red Lobster</h3>
              <p class="mt-1 text-md font-medium text-gray-900">View Menu</p>
            </a>
            <a href="#" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://i.imgur.com/rgnpYlG.jpg"
                  alt="Flemings Logo"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-lg font-bold text-gray-700">
                Fleming's Prime Steakhouse & Wine Bar
              </h3>
              <p class="mt-1 text-md font-medium text-gray-900">View Menu</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
