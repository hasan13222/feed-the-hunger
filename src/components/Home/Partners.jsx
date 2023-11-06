import { partners } from "../../utils/partners";

const Partners = () => {
  return (
    <>
      <div className="bg-gray-200 pb-10">
        <div className="container partners mx-auto">
          <h2 className="text-center text-2xl font-bold py-8">
            Our Proud Partners
          </h2>
          <div className="partner__items flex justify-between flex-wrap">
            {partners.map((brand) => (
              <>
                <div className="partner__item w-[18%] h-40 mb-6">
                  <img src={brand} alt="brand logo" />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
