const { User, Thought } = require('../models');
const { user, thought } = require('./data');
const connection = require('../config/connection');

connection.on(`error`, error=>error);
connection.once(`open`, async () => {
    console.log(`Connection Successful`);
    // drop existing
    await User.deleteMany({});
    // drop existing
    await Thought.deleteMany({});
    // add and await results
    await Thought.insertMany(thought);
    // add and await results
    await User.insertMany(user);
    console.info(`Seeding Completed...`);
    process.exit(0);
});