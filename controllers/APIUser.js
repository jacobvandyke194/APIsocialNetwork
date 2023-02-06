const APIUser = require('../models/APIUser');

module.exports = {
    async createUser(req, res) {
        try {
            const CurrentUser = await APIUser.create(req.body);
            res.json(CurrentUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getAPIUser(req, res) {
        try {
            const CurrentUsers = await APIUser.find();
            res.json(CurrentUsers);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async getOneAPIUser(req, res) {
        try {
            const CurrentUser = await APIUser.findOne({_id: req.params.APIUserId}).select('-__v');
            res.json(CurrentUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async editAPIUser(req, res) {
        try {
            const CurrentUser = await APIUser.findOneAndUpdate({_id: req.params.APIUserId}, {$set: req.body}, {runValidators: true, new: true});
            res.json(CurrentUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async addAPIUser(req, res) {
        try {
            const CurrentUser = await APIUser.findOneAndUpdate({_id: req.params.APIUserId}, {$addToSet: {friends: req.params.friendId}}, { new: true});
            res.json(CurrentUser);
        } catch (error) {
            res.status.json(error);
        }
    },
    async deleteFriend(req, res) {
        try {
            const CurrentUser = await APIUser.findOneAndUpdate({_id: req.params.APIUserId}, {$pull: {friends: req.params.friendId}}, {new: true});
            res.json(CurrentUser);
        } catch (error) {
            res.status.json(error);
        }
    },
    async deleteAPIUser(req, res) {
        try {
            const CurrentUser = await APIUser.findOneAndRemove({_id: req.params.APIUserId});
            if (!CurrentUser){
                res.status(404).json({message: "This user was not found :("})
            } else{ res.json(CurrentUser);}
        } catch (error) {
            res.status(500).json(error);
        }
    },
}