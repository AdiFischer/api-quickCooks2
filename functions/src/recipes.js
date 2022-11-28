import { dbConnect } from "./dbConnect.js"
import { ObjectId } from "mongodb"


export async function addNewRecipe(req, res) {
    const newRecipe = req.body
    const db = dbConnect()
    await db.collection("recipes").insertOne
        (newRecipe)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: "New Recipe Added." })
   
}

export async function getAllRecipes(req, res) {
    const db = dbConnect()
    const collection = await db.collection("recipes").find().toArray()
    res.send(collection)
}

export async function updateRecipe(req, res) {
    const { recipeId } = req.params
    const db = dbConnect()
    await db.collection('recipes')
        .findOneAndUpdate({ _id: new ObjectId(recipeId) }, { $set: req.body })
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(202).send({ message: "recipe updated" })
}

export async function getOneRecipe(req, res) {
    const db = dbConnect()
    const { recipeId } = req.params
    const collection = await db.collection("recipes")
        .find({ _id: new ObjectId(recipeId) }).toArray()
    res.send(collection)
}

export async function deleteRecipe(req, res) {
    const db = dbConnect()
    const { recipeId } = req.params
    const collection = await db.collection("recipes")
        .findOneAndDelete({ _id: new ObjectId(recipeId) })
    res.status(203).send('Recipe Deleted')
}

export async function getRecipeByType(req,res) {
    const db = dbConnect()
    const { type } = req.params
    const collection = await db.collection("recipes")
    .find({ type: type }).toArray()
    res.send(collection)
}
export const getSalads = async (req, res) => {
    const query = { type: "Salads" };
    let theseSalads= await salads
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseSalads);
  };

export const getDairy = async (req, res) => {
    const query = { type: "Dairy" };
    let theseDairy= await dairy
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseDairy);
  };
export const getMeat = async (req, res) => {
    const query = { type: "Meat" };
    let theseMeat= await meat
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseMeat);
  };
export const getChicken = async (req, res) => {
    const query = { type: "Chicken" };
    let theseChicken= await chicken
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseChicken);
  };
export const getFish = async (req, res) => {
    const query = { type: "Fish" };
    let theseFish= await fish
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseFish);
  };
export const getDesserts = async (req, res) => {
    const query = { type: "Desserts" };
    let theseDesserts= await desserts
      .find(query)
      .toArray()
      .catch((err) => res.status(500).send(err));
    res.send(theseDesserts);
  };