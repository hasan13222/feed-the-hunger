import { useEffect, useState } from "react";

const Members = () => {
    const [topDonators, setTopDonators] = useState([])

    useEffect(() => {
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setTopDonators(data))
    }, [])
  return (
    <>
      <div className="bg-gray-200 pb-10">
        <div className="container partners mx-auto">
          <h2 className="text-center text-2xl font-bold py-8">
            Our Top Active Donators
          </h2>
          <div className="partner__items flex justify-between flex-wrap">
            {topDonators.map((item) => (
              <>
                <div className="partner__item w-[15%] h-40 mb-6">
                  <img src={item.donator_image} alt="donator" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
