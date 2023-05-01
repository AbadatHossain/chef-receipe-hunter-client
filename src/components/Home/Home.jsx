import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/chef-cooking.png";
import DeliveryFeature from "../DeliveryFeature/DeliveryFeature";
const Home = () => {
  return (
    <section>
      {/* banner section  */}
      <div className="bg-gray-200 flex my-container sm:flex-col lg:flex-row">
        <div className="my-container flex flex-col items-start pb-24 text-left lg:pb-56 text-gray-900">
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl font-bold">
            Fun and Easy <br /> to become <br />{" "}
            <span className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text text-orange-400 ">
              Master Cook
            </span>{" "}
          </h1>

          <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900 text-justify">
            Let&#39;s join us to become a cooking expert in evry kind of cusine
            with a fun way to learn.We source all of our food products from
            reputable local and international suppliers ensuring we provide a
            superior service to all of our customers.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/shop">
              <button type="button" className="btn-primary">
                Join Lesson
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profileImg}
            alt="profile Image"
            className=" mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid-rows-4 flex justify-evenly my-container">
        <div className="text-4xl font-bold tracking-wide text-center">
          10+ <br />
          <div className="text-xl font-normal">Years of experience</div>
        </div>

        <div className="text-4xl font-bold tracking-wide text-center">
          20+ <br />
          <div className="text-xl font-normal">Team Members</div>
        </div>

        <div className="text-4xl font-bold tracking-wide text-center">
          200+ <br />
          <div className="text-xl font-normal">
            Rgistered corporate customer
          </div>
        </div>

        <div className="text-4xl font-bold tracking-wide text-center">
          5+ <br />
          <div className="text-xl font-normal">Coffee Shops</div>
        </div>
      </div>
      <DeliveryFeature></DeliveryFeature>
      
    </section>
  );
};

export default Home;
