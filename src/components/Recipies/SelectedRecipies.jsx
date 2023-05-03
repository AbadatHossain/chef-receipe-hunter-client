import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SelectedRecipies = () => {
    
    const {id} = useParams()
    const selectedRecipes = useLoaderData()
    return (
        <div>
            <h1>hello{id}</h1>
        </div>
    );
};

export default SelectedRecipies;