import { useContext } from 'react';
import './AddFood.css'
import { AuthContext } from '../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const AddFood = () => {
  const {user} = useContext(AuthContext);

  const notify = () => toast("Food Added successfully");

  const handleAddFood = (e) => {
    e.preventDefault();

    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const foodQty = e.target.foodQty.value;
    const pickup = e.target.pickup.value;
    const expTime = e.target.expTime.value;
    const notes = e.target.notes.value;

    const newFood = {
      foodName,
      foodImage,
      foodQty,
      donorName: user?.displayName,
      donorImage: user?.photoURL,
      donorEmail: user?.email,
      pickup,
      expTime,
      notes,
      foodStatus: "available"
    }

    fetch('http://localhost:5000/addFood', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newFood)
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        notify();
      }
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  return (
    <>
    <Helmet>
        <title>FeedTheHunger | Add Food</title>
      </Helmet>
      <div className="addFood py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Add Your Surplus food to feed the hunger</h2>
          <form onSubmit={handleAddFood} className="w-[80%]">
            <div className="all_inputs flex gap-4 flex-wrap">
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodName">Food Name</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodName"
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodImage">Food Image Url</label>
                <input
                  className="border-gray-300 border w-full h-[41.5px] object-contain"
                  type="text"
                  name="foodImage"
                />
              </div>
              
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodQty">Food Qty</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodQty"
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="pickup">Pickup Location</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="pickup"
                />
              </div>
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="expTime">Expire Time</label>
                <input
                pattern="\d{1,2} [a-zA-Z]{3}, \d{4} \d{2}:\d{2}" title="Please enter a date and time in the format 'dd Mon, yyyy HH:mm' (e.g., 10 Nov, 2023 23:00)"
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="expTime"
                />
              </div>
              
              <div className="single_input flex flex-col gap-2 w-[45%]">
                <label htmlFor="foodStatus">Food Status</label>
                <input
                  className="border-gray-300 border w-full rounded-sm p-2"
                  type="text"
                  name="foodStatus"
                  readOnly
                  defaultValue='available'
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
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Add Food"
              className="btn mt-3 bg-green-700 text-white"
            />
          </form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default AddFood;
