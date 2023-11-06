import { useEffect, useState } from "react";
import FoodItem from "../Shared/FoodItem";
const Feature = () => {
  const [feturedFoods, setFeaturedFood] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFeaturedFood(data));
  }, []);
  return (
    <>
      <div className="bg-gray-200">
        <div className="container featured__section mx-auto">
          <div className="heading">
            <h2 className="text-center text-2xl font-bold py-8">
              Featured Foods
            </h2>
          </div>
          <div className="featured__items flex flex-wrap justify-between">
            {feturedFoods?.map((food) => (
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

export default Feature;