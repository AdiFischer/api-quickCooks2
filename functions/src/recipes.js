import { dbConnect } from "./dbConnect.js"
import { ObjectId } from "mongodb"
import authConnect from "./authConnect.js"

const db = dbConnect()
const recipes = db.collection("recipes")

export async function addNewRecipe(req, res) {
  let newRecipe = req.body
  console.log(req.headers.authentication)
  const decoded = await authConnect().verifyIdToken(req.headers.authentication)
  newRecipe.uid = decoded.uid
  await recipes.insertOne
    (newRecipe)
    .catch(err => {
      res.status(500).send(err)
      return
    })
  res.status(201).send({ message: "New Recipe Added." })
}

export async function getAllRecipes(req, res) {
  const collection = await recipes.find().toArray()
  res.send(collection)
}

export async function updateRecipe(req, res) {
  const { recipeId } = req.params
  console.log(req.headers.authentication)
  const decoded = await authConnect().verifyIdToken(req.headers.authentication)
  await db.collection('recipes')
    .findOneAndUpdate({ _id: new ObjectId(recipeId), uid: decoded.uid }, { $set: req.body })
    .catch(err => {
      res.status(500).send(err)
      return
    })
  res.status(202).send({ message: "recipe updated" })
}

export async function getOneRecipe(req, res) {
  const { recipeId } = req.params
  const collection = await recipes
    .find({ _id: new ObjectId(recipeId) }).toArray()
  res.send(collection)
}

export async function deleteRecipe(req, res) {
  const { recipeId } = req.params
  console.log(req.headers.authentication)
  //first make sure token is valid
  const decoded = await authConnect().verifyIdToken(req.headers.authentication)
  //if valid returns decoded token
  const collection = await recipes
    .findOneAndDelete({ _id: new ObjectId(recipeId), uid: decoded.uid })
  res.status(203).send('Recipe Deleted')
}

export async function getRecipeByType(req, res) {
  const { type } = req.params
  const collection = await recipes
    .find({ type: type }).toArray()
  res.send(collection)
}


export const getSalads = async (req, res) => {
  const query = { type: "Salads" };
  let theseSalads = await salads
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(theseSalads);
};

export const getDairy = async (req, res) => {
  const query = { type: "Dairy" };
  let theseDairy = await dairy
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(theseDairy);
};
export const getMeat = async (req, res) => {
  const query = { type: "Meat" };
  let theseMeat = await meat
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(theseMeat);
};
export const getPoultry = async (req, res) => {
  const query = { type: "Poultry" };
  let thesePoultry = await poultry
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(thesePoultry);
};
export const getSeafood = async (req, res) => {
  const query = { type: "Seafood" };
  let theseSeafood = await seafood
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(theseSeafood);
};
export const getDesserts = async (req, res) => {
  const query = { type: "Desserts" };
  let theseDesserts = await desserts
    .find(query)
    .toArray()
    .catch((err) => res.status(500).send(err));
  res.send(theseDesserts);
};