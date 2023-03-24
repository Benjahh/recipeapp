import { useState } from "react"
import axios from 'axios'
import { useGetUserId } from "../hooks/useGetUserId"
import { useNavigate } from "react-router-dom"

export const CreateRecipe = () => {
  const userID = useGetUserId()
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: [],
        instructions: '',
        imageUrl: '',
        cookingTime:'',
        userOwner: userID,
    })
    
    const navigate = useNavigate()

    const handleRecipe = (e) => {
        const {name, value} = e.target
        setRecipe({...recipe, [name]: value})
    }

    const handleIngredient = (e, idx) => {
        const {value} = e.target
        const ingredients = recipe.ingredients
        ingredients[idx] = value
        setRecipe({...recipe, ingredients})
    }


    const addIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients, '']})
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:3001/recipes', recipe)
            alert('Recipe created')
            navigate('/')
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleRecipe}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleRecipe}
        ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredient(event, index)}
          />
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleRecipe}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleRecipe}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleRecipe}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
    )
}