const { schema, model } = require('mongoose');
const reactSchema = require('./Reaction');
const day = require('dayjs');
const Thought = model('thought', thoughtSchema);

const thinkSchema = new schema(
    {
        thinkText: {
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        reactions: [reactSchema],
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

thinkSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

thinkSchema.virtual('formattedDate').get(function() {
    return day(this.createdAt).format('MM/DD/YYYY');
});

module.exports = Thought;