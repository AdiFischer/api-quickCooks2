import express from "express";
import cors from "cors";
import 'dotenv/config'
import functions from "firebase-functions";
import { addNewRecipe, getAllRecipes, updateRecipe, getOneRecipe, deleteRecipe, getSalads, getDairy, getMeat, getPoultry, getSeafood, getDesserts, getRecipeByType } from "./src/recipes.js";


const app = express()
app.use(express.json({ limit: "15mb" }))
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
app.get('/recipes/poultry', getPoultry)
app.get('/recipes/seafood', getSeafood)
app.get('/recipes/desserts', getDesserts)

app.get('/test', (req, res) => {
    res.send('hello')
})

//const PORT = 3031

//app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))

export const api = functions.https.onRequest(app);
