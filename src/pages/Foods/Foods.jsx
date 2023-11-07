import { useEffect, useRef, useState } from "react";
import FoodItem from "../../components/Shared/FoodItem";
import {BiSort} from 'react-icons/bi'

const Foods = () => {
  const [allFood, setAllFood] = useState([]);
  const [availableFoods, setAvailableFood] = useState([]);
  
  const formRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    const result = allFood?.filter(item => {
      const foodName = item.foodName.toLowerCase();      
      return foodName.includes(searchValue);
    });
    
    setAvailableFood(result);
  }

  const handleLessExpireTime = () => {
    const foods = [...availableFoods].sort((a, b) => {
      const expTimeA = new Date(a.expTime);
      const expTimeB = new Date(b.expTime);
      return expTimeA - expTimeB;
    });
    setAvailableFood(foods);
  }

  const handleMoreExpireTime = () => {
    const foods = [...availableFoods].sort((a, b) => {      
      const expTimeA = new Date(a.expTime);
      const expTimeB = new Date(b.expTime);
      return expTimeB - expTimeA;
    });
    setAvailableFood(foods);
  }

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFood(data);
        setAllFood(data);
      });
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
          <div className="filter flex gap-10 justify-center mb-8" >
            <form ref={formRef} onSubmit={handleSearch} className="w-[40%]">
                <input className="p-3 mr-1 rounded-md w-[80%]" type="text" name="search" placeholder="Search Here..." />
                <input className="btn bg-green-700 text-white" type="submit" value="Search" />
            </form>
            <button onClick={handleLessExpireTime} className="sort flex items-center btn bg-green-700 text-white">
                Less Expire Time
                <BiSort/>
            </button>
            <button onClick={handleMoreExpireTime} className="sort flex items-center btn bg-green-700 text-white">
                More Expire Time
                <BiSort/>
            </button>
            <button onClick={() => {
              setAvailableFood(allFood);              
              formRef.reset();
            }} className="clear btn bg-gray-50">
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
