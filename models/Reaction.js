const { Schema, Types } = require("mongoose");
const date = require("dayjs");

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

reactionSchema.virtual("formatedDate").get(function () {
    return date(this.createdAt).format("MM/DD/YYYY");
});

module.exports = reactionSchema;
