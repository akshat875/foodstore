import React from 'react';

const RestaurantCard = (props) => {
  const { resData } = props;

  
  if (!resData || !resData.data) {
    return <div className="m-4 p-4 w-[270px] rounded-md hover:bg-gray-200">Loading...</div>;
  }

  return (
    <div className="m-4 p-4 w-[270px] rounded-md hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f6etwqizmuaxxe21vxmu"
      />
      <h3 className="py-4 font-bold">{resData.data.name}</h3>
      <h4 className="flex-wrap break-words">{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.deliveryTime}</h4>
      <h4>{resData.data.locality}</h4>
      <h4>{resData.data.avgRating}</h4>
    </div>
  );
};

/** Higher-order function for adding a promotion label */
export const withPromotionLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div >
        <label className='absolute bg-black text-white m-5 p-1 rounded-lg'>Promoted</label>
        
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
