import React, { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const SelectedRecipies = () => {
  const { user } = useContext(AuthContext);
  // const {id} = useParams()
  const selectedRecipes = useLoaderData();
  console.log(selectedRecipes);

  const handleToast = () => {
    toast("Wow so favorite! This is yammi recipes");
  };

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
    <div className="outline-double">
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
      <p>{selectedRecipes.description}</p>
    </div>

      <div className="outline-2">
        <p className="text-center mt-3 ">
          {" "}
          Gradients of chinese food: <br />{" "}
          <span className="font-bold ">
            <ul>{selectedRecipes.gradients_of_chinese_food.map(ing =>(<li>{ing}</li>))}</ul>
          </span>{" "}
        </p>
      </div>

      <h3 className="text-center font-bold text-2xl mb-4 mt-5 ">
        Different Recipe with Grediants
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 ">

        <div className="outline-double me-3">
          <p className="text-center mt-3">
            {" "}
            Receipes Name:{" "}
            <span className="font-bold ">
              {selectedRecipes.recipes[0].name}
            </span>{" "}
          </p>
          <p className="text-center mt-3">
            {" "}
            Grediants Name:{" "}
            <ul className="font-bold ">
              {" "}
              {selectedRecipes.recipes[0].ingredients.map((ing) => (<li>{ing}</li>))}
            </ul>{" "}
          </p>
        </div>
        <div className="outline-double">
          <p className="text-center mt-3">
            {" "}
            Receipes Name:{" "}
            <span className="font-bold ">
              {selectedRecipes.recipes[1].name}
            </span>{" "}
          </p>
          <p className="text-center mt-3">
            {" "}
            Grediants Name:{" "}
            <ul className="font-bold ">
              {" "}
              {selectedRecipes.recipes[0].ingredients.map((ing) => (<li>{ing}</li>))}
            </ul>{" "}
          </p>
        </div>
        <div className="outline-double ms-3">
          <p className="text-center mt-3">
            {" "}
            Receipes Name:{" "}
            <span className="font-bold ">
              {selectedRecipes.recipes[2].name}
            </span>{" "}
          </p>
          <p className="text-center mt-3">
            {" "}
            Grediants Name:{" "}
            <ul className="font-bold pb-2 ">
              {" "}
              {selectedRecipes.recipes[0].ingredients.map((ing) => (<li>{ing}</li>))}
            </ul>{" "}
          </p>
        </div>
      </div>

      <button className="btn-primary items-center mx-auto" onClick={handleToast}>Favorite</button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SelectedRecipies;
