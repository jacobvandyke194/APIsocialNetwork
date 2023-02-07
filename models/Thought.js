const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const date = require('dayjs');

const thoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        thoughtText: {
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
        methods: {
            getFormattedDate() {
                return this.createdAt;
            },
        },
    },
);

const Thought = model('thought', thoughtSchema);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
thoughtSchema.virtual('formattedDate').get(function() {
    return date(this.createdAt).format('MM/DD/YY');
});
module.exports = Thought;