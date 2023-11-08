import { useParams } from "react-router-dom";
import "./EditFood.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const EditFood = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();

  const notify = () => toast("food updated successfully");

  const handleUpdate = (e) => {
    e.preventDefault();

    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const foodQty = e.target.foodQty.value;
    const pickup = e.target.pickup.value;
    const expTime = e.target.expTime.value;
    const notes = e.target.notes.value;

    const updatedFood = {
      foodName,
      foodImage,
      foodQty,
      pickup,
      expTime,
      notes,
    };

    fetch(`https://feed-the-hunger-server-7dk4ehmpc-jamil-hasans-projects.vercel.app/editFood/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          notify();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch(`https://feed-the-hunger-server-7dk4ehmpc-jamil-hasans-projects.vercel.app/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>FeedTheHunger | Edit Food</title>
      </Helmet>
      <div className="addFood py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Update Your Added Food</h2>
          <form onSubmit={handleUpdate} className="w-[80%]">
            <div className="all_inputs flex gap-4 flex-wrap">
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodName">Food Name</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodName"
                  defaultValue={food?.foodName}
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodImage">Food Image Url</label>
                <input
                  className="border-gray-300 border w-full h-[41.5px] object-contain"
                  type="text"
                  name="foodImage"
                  defaultValue={food?.foodImage}
                />
              </div>

              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodQty">Food Qty</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodQty"
                  defaultValue={food?.foodQty}
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="pickup">Pickup Location</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="pickup"
                  defaultValue={food?.pickup}
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="expTime">Expire Time</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="expTime"
                  defaultValue={food?.expTime}
                />
              </div>

              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodStatus">Food Status</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodStatus"
                  readOnly
                  defaultValue="available"
                />
              </div>

              <div className="single_input flex flex-col gap-2 w-full">
                <label htmlFor="notes">Add notes</label>
                <textarea
                  className="border-gray-300 border w-full rounded-sm p-2"
                  name="notes"
                  id=""
                  cols="30"
                  rows="3"
                  defaultValue={food?.notes}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Update Food"
              className="btn mt-3 bg-green-700 text-white"
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditFood;
