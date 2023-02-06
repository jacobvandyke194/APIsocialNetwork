const routes = require('express').Router();
const { createThought, updateThought, deleteThought, getThoughts, getSingleThought, addThoughtReaction, removeThoughtReaction } = require('../../controllers/thoughtController');

routes.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
routes.route('/').get(getThoughts).post(createThought);
routes.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);
routes.route('/:thoughtId/reactions').post(addThoughtReaction);

module.exports = router;