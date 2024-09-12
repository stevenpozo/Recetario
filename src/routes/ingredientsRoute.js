const express = require('express');
const router = express.Router();
const Ingredients = require('../models/ingredients');

router.get('/recipe/:recipeId', async (req, res) => {
    const ingredients = await Ingredients.getIngredientsByRecipeId(req.params.recipeId);
    res.json(ingredients);
});

router.get('/:id', async (req, res) => {
    const ingredient = await Ingredients.getIngredientById(req.params.id);
    res.json(ingredient);
});

router.post('/create', async (req, res) => {
    const ingredientId = await Ingredients.createIngredient(req.body);
    res.json({ id: ingredientId });
});

router.put('/update/:id', async (req, res) => {
    await Ingredients.updateIngredient(req.params.id, req.body);
    res.sendStatus(204);
});

router.delete('/delete/:id', async (req, res) => {
    await Ingredients.deleteIngredient(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
