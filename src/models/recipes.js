const db = require('../database/db');

// Obtener todas las recetas
const getAllRecipes = async () => {
    const [rows] = await db.query('SELECT * FROM Recipes');
    return rows;
};

// Obtener una receta por ID
const getRecipeById = async (id) => {
    const [rows] = await db.query('SELECT * FROM Recipes WHERE RecipeID = ?', [id]);
    return rows[0];
};

// Crear una nueva receta
const createRecipe = async (recipe) => {
    const { UserID, Title, Description, Instructions, PreparationTime, Servings, Status, CategoryID } = recipe;
    const result = await db.query(
        'INSERT INTO Recipes (UserID, Title, Description, Instructions, PreparationTime, Servings, Status, CategoryID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [UserID, Title, Description, Instructions, PreparationTime, Servings, Status, CategoryID]
    );
    return result[0].insertId;
};

// Actualizar una receta
const updateRecipe = async (id, recipe) => {
    const { Title, Description, Instructions, PreparationTime, Servings, Status, CategoryID } = recipe;
    await db.query(
        'UPDATE Recipes SET Title = ?, Description = ?, Instructions = ?, PreparationTime = ?, Servings = ?, Status = ?, CategoryID = ? WHERE RecipeID = ?', 
        [Title, Description, Instructions, PreparationTime, Servings, Status, CategoryID, id]
    );
};

// Eliminar una receta
const deleteRecipe = async (id) => {
    await db.query('DELETE FROM Recipes WHERE RecipeID = ?', [id]);
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
