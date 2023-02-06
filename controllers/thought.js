const { Thought, APIUser} = require('../models');

module.exports = {
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const APIUser= await User.findOneAndUpdate({ _id: req.body.userId }, { $addToSet: {thoughts: thought._id} }, {new:true});
            res.json(`Thought created!`);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async grabThought(req, res) {
        try {
            const thinking = await Thought.find();
            res.json(thinking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async editThought(req, res) {
        try {
            const thinking = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$set: req.body}, {runValidators: true, new: true});
            res.json(thinking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async singleThought(req, res) {
        try {
            const thinking = await Thought.findOne({_id: req.params.thoughtId});
            res.json(thinking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async removeThought(req, res) {
        try {
            const thinking = await Thought.findOneAndRemove({_id: req.params.thoughtId});
            if (!thinking) {
                res.status(404).json({message: `Please enter a new ID. (Thoughtless)`});
            } else {
                const APIUser= await User.findOneAndUpdate({thoughts: req.params.thoughtId}, {$pull: {thoughts: req.params.thoughtId}}, {new:true});
                res.json({message: 'Successfully Delete Though :)'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async removeReact(req, res) {
        try {
            const thinking = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {runValidators: true, new: true});
            res.json(thinking);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addReact(req, res) {
        try {
            const thinking = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reactions: req.body}}, {runValidators: true, new: true});
            res.json(thinking);
        } catch (error) {
            res.status(500).json(error);
        }
    }}