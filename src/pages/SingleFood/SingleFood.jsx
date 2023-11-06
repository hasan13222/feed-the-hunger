import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleFood = () => {
  const [food, setFood] = useState({});

  const { foodId } = useParams();

  useEffect(() => {
    fetch("../foods.json")
      .then((res) => res.json())
      .then((data) => {
        const singleFood = data.find((item) => item.id === parseInt(foodId));
        setFood(singleFood);
      });
  }, [foodId]);

  return (
    <>
      <div className="container mx-auto">
        <div className="p-8 mb-6 flex mx-auto gap-6 bg-green-200 my-10 w-max">
          <img
            className="max-w-lg max-h-96 object-cover mb-4"
            src={food.food_image}
            alt="food thumb"
          />
          <div className="text_wrapper">
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
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-green-400"
              >
                Request Food
              </button>
            </div>
          </div>
        </div>

        {/* <!-- modal --> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal_head flex justify-between items-center">
              <h3 className="font-bold text-lg">Confirm Your Request</h3>
              <div className="modal-action mt-0">
                <form method="dialog">
                  {/* <!-- if there is a button in form, it will close the modal --> */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
            <form>
              <div className="all_inputs flex gap-4 flex-wrap">
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodImage">Food Image</label>
                  <input
                    className="border-gray-300 border w-full h-[41.5px] object-contain"
                    type="image"
                    name="foodImage"
                    readOnly
                    src={food.food_image}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodName">Food Name</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="foodName"
                    readOnly
                    defaultValue={food.food_name}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="donatorImage">Donator Image</label>
                  <input 
                  className="border-gray-300 border w-full h-[41.5px] object-contain"
                    type="image"
                    name="donatorImage"
                    readOnly
                    src={food.donator_image}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="DonatorName">Donator Name</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="DonatorName"
                    readOnly
                    defaultValue={food.donator_name}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodQty">Food Qty</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="foodQty"
                    readOnly
                    defaultValue={food.food_qty}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="pickup">Pickup Location</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="pickup"
                    readOnly
                    defaultValue={food.pickup_location}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="expTime">Expire Time</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="expTime"
                    readOnly
                    defaultValue={food.exp_time}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="donationMoney">Donation Money</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2" type="text" name="donationMoney" />
                </div>
                
                <div className="single_input flex flex-col gap-2 w-full">
                  <label htmlFor="notes">Add notes</label>
                  <textarea className="border-gray-300 border w-full rounded-sm p-2" name="notes" id="" cols="30" rows="3">{food.add_notes}</textarea>
                </div>
                
              </div>
              <input type="submit" value="Confirm" className="btn mt-3 bg-green-700 text-white" />
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default SingleFood;
