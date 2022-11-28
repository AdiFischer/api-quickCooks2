import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { addNewRecipe, getAllRecipes, updateRecipe, getOneRecipe, deleteRecipe, getSalads, getDairy, getMeat, getChicken, getFish, getDesserts, getRecipeByType } from "./src/recipes.js";


const app = express()
app.use(express.json())
app.use(cors())

app.post('/recipes', addNewRecipe)
app.get('/recipes', getAllRecipes)
app.patch('/recipes/:recipeId', updateRecipe)
app.get('/recipes/:recipeId', getOneRecipe)
app.delete('/recipes/:recipeId', deleteRecipe)
app.get('/recipes/type/:type', getRecipeByType)


app.get('/recipes/salads', getSalads)
app.get('/recipes/dairy', getDairy)
app.get('/recipes/meat', getMeat)
app.get('/recipes/chicken', getChicken)
app.get('/recipes/fish', getFish)
app.get('/recipes/desserts', getDesserts)

app.get('/test', (req, res) => {
    res.send('hello')
})

//const PORT = 3031

//app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))

export const api = functions.https.onRequest(app);
