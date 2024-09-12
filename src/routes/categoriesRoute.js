const express = require('express');
const router = express.Router();
const Categories = require('../models/categories');

router.get('/', async (req, res) => {
    const categories = await Categories.getAllCategories();
    res.json(categories);
});

router.get('/:id', async (req, res) => {
    const category = await Categories.getCategoryById(req.params.id);
    res.json(category);
});

router.post('/create', async (req, res) => {
    const categoryId = await Categories.createCategory(req.body);
    res.json({ id: categoryId });
});

router.put('/update/:id', async (req, res) => {
    await Categories.updateCategory(req.params.id, req.body);
    res.sendStatus(204);
});

router.delete('/delete/:id', async (req, res) => {
    await Categories.deleteCategory(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
