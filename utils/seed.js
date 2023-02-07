const connectDB = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connectDB.on(`error`, err=>err);
connectDB.once(`open`, async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);
    await User.insertMany(users);
    console.info(`Seeding had been completed..`);
    process.exit(0);
});