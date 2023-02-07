const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        username: {
            type: String, 
            unique: true,
            required: true,
            unique: true,
            trim: true,
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
const User = model('user', userSchema);
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
module.exports = User;