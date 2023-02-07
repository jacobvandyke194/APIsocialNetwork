const User = require('../models/User');
module.exports = {
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            if(user){
            res.json(user);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId}).select('-__v');
            if(user){
            res.json(user);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getUsers(req, res) {
        try {
            const user = await User.find();
            if(user){
            res.json(user);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}}, {new: true});
            if(user){
            res.json(user);}
        } catch (error) {
            res.status.json(error);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {runValidators: true, new: true});
            if(user){
            res.json(user);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({_id: req.params.userId});
            if(user){
            !user ? res.status(404).json({message: "User not found!"}) : res.json(user);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addOneFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: req.params.friendId}}, { new: true});
            if(user){
            res.json(user);}
        } catch (error) {
            res.status.json(error);
        }
    }
}