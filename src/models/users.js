const db = require('../database/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM Users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM Users WHERE userID = ?', [id]);
    return rows[0];
};

const createUser = async (users) => {
    const { Username, Email, Password, Role, Status } = users; // No necesitamos RegistrationDate
    const result = await db.query(
        'INSERT INTO Users (Username, Email, Password, Role, Status) VALUES (?, ?, ?, ?, ?)', 
        [Username, Email, Password, Role, Status]
    );
    return result[0].insertId;
};


const updateUser = async (id, users) => {
    const { Username, Email, Password, Role, Status } = users; // Sin RegistrationDate
    await db.query(
        'UPDATE Users SET Username = ?, Email = ?, Password = ?, Role = ?, Status = ? WHERE UserID = ?', 
        [Username, Email, Password, Role, Status, id]
    );
};



const deleteUser = async (id) => {
    // Actualiza el campo Status a 'disable' en lugar de eliminar el registro
    await db.query('UPDATE Users SET Status = ? WHERE UserID = ?', ['disable', id]);
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
