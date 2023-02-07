const { createUser, getUsers, getSingleUser, updateUser, addOneFriend, deleteFriend } = require('../../controllers/userController');
const route = require('express').Router();
route.route('/').get(getUsers).post(createUser);
route.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteFriend);
route.route('/:userId/friends/:friendId').post(addOneFriend).delete(deleteFriend);
module.exports = route;