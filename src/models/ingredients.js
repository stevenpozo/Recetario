const db = require('../database/db');

// Obtener todos los ingredientes de una receta
const getIngredientsByRecipeId = async (recipeId) => {
    const [rows] = await db.query('SELECT * FROM Ingredients WHERE RecipeID = ?', [recipeId]);
    return rows;
};

// Obtener un ingrediente por ID
const getIngredientById = async (id) => {
    const [rows] = await db.query('SELECT * FROM Ingredients WHERE IngredientID = ?', [id]);
    return rows[0];
};

// Crear un nuevo ingrediente
const createIngredient = async (ingredient) => {
    const { RecipeID, IngredientName, Quantity, MeasurementUnit } = ingredient;
    const result = await db.query(
        'INSERT INTO Ingredients (RecipeID, IngredientName, Quantity, MeasurementUnit) VALUES (?, ?, ?, ?)', 
        [RecipeID, IngredientName, Quantity, MeasurementUnit]
    );
    return result[0].insertId;
};

// Actualizar un ingrediente
const updateIngredient = async (id, ingredient) => {
    const { IngredientName, Quantity, MeasurementUnit } = ingredient;
    await db.query(
        'UPDATE Ingredients SET IngredientName = ?, Quantity = ?, MeasurementUnit = ? WHERE IngredientID = ?', 
        [IngredientName, Quantity, MeasurementUnit, id]
    );
};

// Eliminar un ingrediente
const deleteIngredient = async (id) => {
    await db.query('DELETE FROM Ingredients WHERE IngredientID = ?', [id]);
};

module.exports = {
    getIngredientsByRecipeId,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
};
