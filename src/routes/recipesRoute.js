const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes');

router.get('/', async (req, res) => {
    const recipes = await Recipes.getAllRecipes();
    res.json(recipes);
});

router.get('/:id', async (req, res) => {
    const recipe = await Recipes.getRecipeById(req.params.id);
    res.json(recipe);
});

router.post('/create', async (req, res) => {
    const recipeId = await Recipes.createRecipe(req.body);
    res.json({ id: recipeId });
});

router.put('/update/:id', async (req, res) => {
    await Recipes.updateRecipe(req.params.id, req.body);
    res.sendStatus(204);
});

router.delete('/delete/:id', async (req, res) => {
    await Recipes.deleteRecipe(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
