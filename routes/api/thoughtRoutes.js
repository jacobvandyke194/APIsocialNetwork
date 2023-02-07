const { createThought, updateThought, deleteThought, getThoughts, getSingleThought, addThoughtReaction, removeThoughtReaction } = require('../../controllers/thoughtController');
const route = require('express').Router();
route.route('/').get(getThoughts).post(createThought);
route.route('/:thoughtId/reactions').post(addThoughtReaction);
route.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);
route.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
module.exports = route;