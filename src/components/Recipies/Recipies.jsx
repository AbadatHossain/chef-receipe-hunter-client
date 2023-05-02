import React, { useEffect, useState } from "react";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);
  const [error, setErrror] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipies(data))
      .catch((error) => setErrror(error));
  }, []);
  return (
    <div className="my-container">
      <h1 className="text-center font-bold text-xl">Chef Information</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        {recipies.map((recipe) => (
          <div key={recipe.id}>
            <img className="w-64 mx-auto" src={recipe.chef_picture} alt="" />
            <h2 className="font-bold text-center mt-4">{recipe.chef_name}</h2>
            <h3 className="text-center">
              Years_of_experience: {recipe.years_of_experience}
            </h3>
            <h3 className="text-center">
              Number_of_recipes: {recipe.number_of_recipes}
            </h3>
            <h3 className="text-center">Likes: {recipe.likes}</h3>
            <button className="text-center font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-orange-400 mb-4 mx-40">
              View Recipes Button
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
