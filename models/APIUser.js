const { schema, model } = require('mongoose');
const User = model('user', APIUserSchema);

const APIUserSchema = new schema(
    {   
        friends: [
            {
                type: schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        username: {
            type: String, 
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Enter an Email Adress!'],
        },
        thoughts: [
            {
                type: schema.Types.ObjectId,
                ref: 'Thought',
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

APIUserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;