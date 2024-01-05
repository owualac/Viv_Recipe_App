import React, { useState, FormEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { searchRecipes } from './API'
import { Recipe } from './types'

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { results } = await searchRecipes(searchTerm, 1);
      setRecipes(results);
    } catch (error) {
      console.log(error);
    };

  };
  return <div>
    <h1>Welcome to Viv's Recipe Application</h1>
    <p> We provide the recipes for some of the most delicious and in demand menus in the world!!</p>
    <div>
      <form onSubmit={handleSearchSubmit}>
        <button type="submit"> Submit</button>
      </form>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          Recipe Image Location: {recipe.image}
          <br />
          Recipe Title: {recipe.title}
        </div>
      ))}

    </div>
  </div>

};
export default App
