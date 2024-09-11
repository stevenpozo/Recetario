const db = require('../database/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM Users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM Users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (users) => {
    const { Username, Email, Password, RegistrationDate, Role, Status } = users;
    const result = await db.query('INSERT INTO Users (Username, Email, Password, RegistrationDate, Role, Status ) VALUES (?, ?, ?, ?, ?)', [Username, Email, Password, RegistrationDate, Role, Status ]);
    return result[0].insertId;
};

const updateUser = async (id, users) => {
    const { Username, Email, Password, RegistrationDate, Role, Status } = users;
    await db.query('UPDATE Users SET Username = ?, Email = ?, Password = ?, RegistrationDate = ?, Role = ?, Status =?  WHERE UserID = ?', 
    [Username, Email, Password, RegistrationDate, Role, Status, id]);
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
