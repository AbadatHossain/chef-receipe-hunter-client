import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from "../../assets/chef-cooking.png";
const Home = () => {
    return (
        <section>
      {/* banner section  */}
      <div className="bg-gray-200 flex my-container">
        <div className="my-container flex flex-col items-start pb-24 text-left lg:pb-56 text-gray-900">
          <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl font-bold">
            Fun and Easy <br /> to become <br />{" "}
            <span className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text text-orange-400 ">
              Master Cook
            </span>{" "}
          </h1>

          <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
            Let&#39;s join us to become a cooking expert in evry kind of cusine with a fun way to learn.
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

      
    </section>
    );
};

export default Home;