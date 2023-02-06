const { Schema, Types } = require("mongoose");
const dayjs = require("dayjs");

const schema = new Schema(
    {
        reactBody: {
            type: String,
            required: true,
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
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

schema.virtual("formatedDate").get(function () {
    return dayjs(this.createdAt).format("MM/DD/YYYY");
});

module.exports = schema;
