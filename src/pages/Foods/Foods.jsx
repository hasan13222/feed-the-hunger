import { useEffect, useState } from "react";
import FoodItem from "../../components/Shared/FoodItem";
import {BiSort} from 'react-icons/bi'

const Foods = () => {
  const [availableFoods, setAvailableFood] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setAvailableFood(data));
  }, []);
  return (
    <>
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="heading">
            <h2 className="text-center text-2xl font-bold py-8">
              Available Foods
            </h2>
          </div>
          <div className="filter flex gap-10 justify-center mb-8">
            <form className="w-[40%]">
                <input className="p-3 mr-1 rounded-md w-[80%]" type="text" name="search" placeholder="Search Here..." />
                <input className="btn bg-green-700 text-white" type="submit" value="Search" />
            </form>
            <button className="sort flex items-center btn bg-green-700 text-white">
                Sort
                <BiSort/>
            </button>
            <button className="clear btn bg-gray-50">
                Clear
            </button>
          </div>
          <div className="flex flex-wrap justify-between">
            {availableFoods?.map((food) => (
              <>
                <FoodItem food={food} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Foods;
