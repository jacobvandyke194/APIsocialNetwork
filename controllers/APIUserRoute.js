const routes = require('express').Router();
const { createUser, getUsers, getSingleUser, updateUser, addOneFriend, deleteFriend } = require('../../controllers/userController');

routes.route('/:userId/friends/:friendId').post(addOneFriend).delete(deleteFriend);
routes.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteFriend);
routes.route('/').get(getUsers).post(createUser);

module.exports = routes;