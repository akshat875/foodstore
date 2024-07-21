import RestaurantCard, { withPromotionLabel } from "./RestaurantCard";
import initialRestaurantList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(initialRestaurantList);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotionLabel(RestaurantCard);

  const handleSearch = () => {
    const filteredRestaurantList = initialRestaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRestaurantList);
  };

  useEffect(() => {
    const filteredRestaurantList = initialRestaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRestaurantList);
  }, [searchText]);

  const handleFilterTopRated = () => {
    const filteredList = initialRestaurantList.filter(
      (res) => res.data.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else {
      setSearchText(e.target.value);
    }
  };

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
            type="text"
            className="search-box border border-black shadow-md rounded-lg"
            value={searchText}
            onKeyUp={handleKeyUp}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Dishes..."
          />
          <button className="bg-green-400 px-4 py-1 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div className="flex items-center">
          <button className="m-2 p-2 filter-btn bg-slate-500 rounded-lg" onClick={handleFilterTopRated}>
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {restaurantList.map((restaurant) => (
          restaurant.data.promoted 
            ? <RestaurantCardPromoted key={restaurant.data.id} resData={restaurant} />
            : <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
