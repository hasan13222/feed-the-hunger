import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const SingleFood = () => {
  const [food, setFood] = useState({});
  const {user} = useContext(AuthContext);

  const { foodId } = useParams();

  const notify = () => toast("Your request has been sent");

  // get current time
  function getCurrentFormattedDate() {
    const now = new Date();
  
    const day = now.getDate().toString().padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    const formattedDate = `${day} ${month}, ${year} ${hours}:${minutes}`;
    return formattedDate;
  }
  
  const currentDateFormatted = getCurrentFormattedDate();

  const handleRequestFood = (e) => {
    e.preventDefault();
    const notes = e.target.notes.value;
    const donationMoney = e.target.donationMoney.value;

    const requestedFood = {
      foodId,
      foodName: food?.foodName,
      foodImage: food?.foodImage,
      donationMoney,
      donorEmail: food?.donorEmail,
      donorName: food?.donorName,
      userEmail: user?.email,
      reqDate: currentDateFormatted,
      notes,
      pickup: food?.pickup,
      expTime: food?.expTime
    }

    fetch('http://localhost:5000/requestFood', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(requestedFood)
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
  
  useEffect(() => {
    fetch(`http://localhost:5000/foods/${foodId}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [foodId]);

  return (
    <>
      <div className="container mx-auto">
        <div className="p-8 mb-6 flex mx-auto gap-6 bg-green-200 my-10 w-max">
          <img
            className="max-w-lg max-h-96 object-cover mb-4"
            src={food?.foodImage}
            alt="food thumb"
          />
          <div className="text_wrapper">
            <h3 className="font-semibold text-gray-600">{food?.foodName}</h3>
            <p className="mb-2">{food?.notes}</p>
            <div className="donatedBy flex items-center gap-2">
              <h6>Donated By:</h6>
              <img
                className="rounded-full w-14 h-14 object-cover"
                src={food?.donorImage}
                alt="donator"
              />
              <span>{food?.donorName}</span>
            </div>
            <p>Food Qty: {food?.foodQty}</p>
            <p>Pickup Location: {food?.pickup}</p>
            <p>Expired Time: {food?.expTime}</p>
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
            <form onSubmit={handleRequestFood}>
              <div className="all_inputs flex gap-4 flex-wrap">
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodId">Food Id</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="foodId"
                    readOnly
                    defaultValue={food?._id}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodImage">Food Image</label>
                  <input
                    className="border-gray-300 border w-full h-[41.5px] object-contain"
                    type="image"
                    name="foodImage"
                    readOnly
                    src={food?.foodImage}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="foodName">Food Name</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="foodName"
                    readOnly
                    defaultValue={food?.foodName}
                  />
                </div>
                
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="donorName">Donator Name</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="donorName"
                    readOnly
                    defaultValue={food?.donorName}
                  />
                </div>
                
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="donorEmail">Donator Email</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="donorEmail"
                    readOnly
                    defaultValue={food?.donorEmail}
                  />
                </div>

                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="userEmail">Your Email</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="userEmail"
                    readOnly
                    defaultValue={user?.email}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="reqDate">Request Date</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="reqDate"
                    readOnly
                    defaultValue={currentDateFormatted}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="pickup">Pickup Location</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="pickup"
                    readOnly
                    defaultValue={food?.pickup}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="expTime">Expire Time</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2"
                    type="text"
                    name="expTime"
                    readOnly
                    defaultValue={food?.expTime}
                  />
                </div>
                <div className="single_input flex flex-col gap-2 w-[45%]">
                  <label htmlFor="donationMoney">Donation Money</label>
                  <input className="border-gray-300 border w-full rounded-sm p-2" type="text" name="donationMoney" />
                </div>
                
                <div className="single_input flex flex-col gap-2 w-full">
                  <label htmlFor="notes">Additional notes</label>
                  <textarea defaultValue="write your notes here" className="border-gray-300 border w-full rounded-sm p-2" name="notes" id="" cols="30" rows="3"></textarea>
                </div>
                
              </div>
              <input type="submit" value="Confirm" className="btn mt-3 bg-green-700 text-white" />
            </form>
          </div>
        </dialog>
      </div>
      <ToastContainer/>
    </>
  );
};

export default SingleFood;
