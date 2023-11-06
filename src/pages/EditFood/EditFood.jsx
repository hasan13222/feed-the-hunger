import './EditFood.css'

const EditFood = () => {
    return (
        <>
          <div className="addFood py-10">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6">Update Your Added Food</h2>
              <form className="w-[80%]">
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
                  value="Update Food"
                  className="btn mt-3 bg-green-700 text-white"
                />
              </form>
            </div>
          </div>
        </>
      );
}

export default EditFood