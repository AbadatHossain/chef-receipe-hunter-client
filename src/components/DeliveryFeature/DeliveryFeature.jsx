import React from "react";
import delProfileImg from "../../assets/safe-food-delivery.png";
import { FaClock } from "react-icons/fa";
import { FaDelicious } from "react-icons/fa";

const DeliveryFeature = () => {
  return (
    <section>
      {/* banner section  */}
      <div className="bg-gray-200 flex my-container lg:flex-row sm:flex-col">
        <div>
          <img
            src={delProfileImg}
            alt="profile Image"
            className=" mx-auto rounded-lg shadow-md"
          />
        </div>

        <div className="my-container flex flex-col items-start text-left text-gray-900 h-60 pt-0">
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl font-bold">
            Fast food
            <br /> Delivery in city
          </h1>

          <p className="text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900 text-justify">
            Food brings people together on many different levels. It&#39;s
            Noursishment of the soul and body.
            <br /><br />
            <ul>
              <li className="flex items-center ms-2"><FaClock></FaClock> <span className="px-2">Delivry within 30-40 mins.</span></li>
              <li className="flex items-center ms-2"><FaDelicious></FaDelicious> <span className="px-2">Best offfer, prices and delicious</span></li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeature;
