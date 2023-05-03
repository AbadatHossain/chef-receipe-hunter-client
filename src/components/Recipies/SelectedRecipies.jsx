import React, { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SelectedRecipies = () => {
  const { user } = useContext(AuthContext);
  // const {id} = useParams()
  const selectedRecipes = useLoaderData();
  console.log(selectedRecipes);

  if (!user) {
    return (
      <>
        <Navigate to={"/login?redirect=" + window.location.href} />;
      </>
    );
  }

  return (
    <div className="my-container">
      <h1 className="text-center font-bold text-2xl mb-4 ">
        Chef Personal Information
      </h1>
      <img
        className="w-96 mx-auto"
        src={selectedRecipes?.chef_picture}
        alt=""
      />
      <h1 className="font-bold text-center mt-3">
        {selectedRecipes?.chef_name}
      </h1>
      <h3 className="text-center">
        Years_of_experience: {selectedRecipes.years_of_experience}
      </h3>
      <h3 className="text-center">
        Number_of_recipes: {selectedRecipes.number_of_recipes}
      </h3>
      <h3 className="text-center">Likes: {selectedRecipes.likes}</h3>
      <p >{selectedRecipes.description}</p>


      <div className="outline-2">
      <p className="text-center mt-3 "> Gradients of chinese food: <br /> <span className="font-bold "><li>{selectedRecipes.gradients_of_chinese_food}</li></span> </p>
      
      </div>


      <h3 className="text-center font-bold text-2xl mb-4 mt-5 ">
        Different Recipe with Grediants
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 outline-2 ">
      
      <div>
      <p className="text-center mt-3"> Receipes Name: <span className="font-bold ">{selectedRecipes.recipes[0].name}</span> </p>
      <p className="text-center mt-3"> Grediants Name: <span className="font-bold "> {(selectedRecipes.recipes[0].ingredients). map(ing =>(ing))}</span> </p>
      </div>
      <div>
      <p className="text-center mt-3"> Receipes Name: <span className="font-bold ">{selectedRecipes.recipes[1].name}</span> </p>
      <p className="text-center mt-3"> Grediants Name: <span className="font-bold "> {(selectedRecipes.recipes[0].ingredients). map(ing =>(ing))}</span> </p>
      </div>
      <div>
      <p className="text-center mt-3"> Receipes Name: <span className="font-bold ">{selectedRecipes.recipes[2].name}</span> </p>
      <p className="text-center mt-3"> Grediants Name: <span className="font-bold "> {(selectedRecipes.recipes[0].ingredients). map(ing =>(ing))}</span> </p>
      </div>
      </div>
    </div>
  );
};

export default SelectedRecipies;
