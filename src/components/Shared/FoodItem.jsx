import { useNavigate } from "react-router-dom";

const FoodItem = ({food}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="featured__item w-[30%] bg-slate-50 p-4 mb-6">
        <img
          className="w-full object-cover mb-4"
          src={food.foodImage}
          alt="food thumb"
        />
        <h3 className="font-semibold text-gray-600">{food.foodName}</h3>
        <p className="mb-2">{food.notes}</p>
        <div className="donatedBy flex items-center gap-2">
          <h6>Donated By:</h6>
          <img
            className="rounded-full w-14 h-14 object-cover"
            src={food.donorImage}
            alt="donator"
          />
          <span>{food.donorName}</span>
        </div>
        <p>Food Qty: {food.foodQty}</p>
        <p>Pickup Location: {food.pickup}</p>
        <p>Expired Time: {food.expTime}</p>
        <div className="view_details text-center mt-2">
          <button onClick={() => navigate(`/foods/${food._id}`)} className="btn bg-green-400">View Details</button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
