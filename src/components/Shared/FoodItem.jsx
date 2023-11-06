const FoodItem = ({food}) => {
  return (
    <>
      <div className="featured__item w-[30%] bg-slate-50 p-4 mb-6">
        <img
          className="w-full object-cover mb-4"
          src={food.food_image}
          alt="food thumb"
        />
        <h3 className="font-semibold text-gray-600">{food.food_name}</h3>
        <p className="mb-2">{food.add_notes}</p>
        <div className="donatedBy flex items-center gap-2">
          <h6>Donated By:</h6>
          <img
            className="rounded-full w-14 h-14 object-cover"
            src={food.donator_image}
            alt="donator"
          />
          <span>{food.donator_name}</span>
        </div>
        <p>Food Qty: {food.food_qty}</p>
        <p>Pickup Location: {food.pickup_location}</p>
        <p>Expired Time: {food.exp_time}</p>
        <div className="view_details text-center mt-2">
          <button className="btn bg-green-400">View Details</button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
