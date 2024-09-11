const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/', async (req, res) => {
    const users = await Users.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const users = await Users.getUserById(req.params.id);
    res.json(users);
});

router.post('/create', async (req, res) => {
    const usersId = await Users.createUser(req.body);
    res.json({ id: usersId });
});

router.put('/update/:id', async (req, res) => {
    await Users.updateUser(req.params.id, req.body);
    res.sendStatus(204);
});

router.delete('/delete/:id', async (req, res) => {
    await Users.deleteUser(req.params.id);
    res.sendStatus(204);
});

module.exports = router;