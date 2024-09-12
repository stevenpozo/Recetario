const db = require('../database/db');

// Obtener todas las categorías
const getAllCategories = async () => {
    const [rows] = await db.query('SELECT * FROM Categories');
    return rows;
};

// Obtener una categoría por ID
const getCategoryById = async (id) => {
    const [rows] = await db.query('SELECT * FROM Categories WHERE CategoryID = ?', [id]);
    return rows[0];
};

// Crear una nueva categoría
const createCategory = async (category) => {
    const { CategoryName } = category;
    const result = await db.query('INSERT INTO Categories (CategoryName) VALUES (?)', [CategoryName]);
    return result[0].insertId;
};

// Actualizar una categoría
const updateCategory = async (id, category) => {
    const { CategoryName } = category;
    await db.query('UPDATE Categories SET CategoryName = ? WHERE CategoryID = ?', [CategoryName, id]);
};

// Eliminar una categoría
const deleteCategory = async (id) => {
    await db.query('DELETE FROM Categories WHERE CategoryID = ?', [id]);
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
