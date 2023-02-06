// seeding data obtained and updated from mini project.

const user = [
    { 
        username: "jake123",
        email: "jakey@mail.com",
    },
    {
        username: "bella123",
        email: "bella@mail.com",
    },
    {
        username: "vandyke",
        email: "vandyke@mail.com",
    },
    {
        username: "Zane",
        email: "zane@mail.com",
    },
    {
        username: "Callie",
        email: "callie@mail.com",
    },
    {
        username: "big butt",
        email: "hello@gmail.com"
    },
    {
        username: "Zion Williamson",
        email: "zionw@mail.com",
    },
    {
        username: 'KIM',
        email: "kardash@mail.com",
    },
    {
        username: "I like Pie 69",
        email: "pieguy@mail.com",
    },
    {
        username: "Clarksy",
        email: "clarky@mail.com"
    },
    {
        username: "He went to JRED",
        email: "jred@mail.com",
    },
];

const thought = [
    {
        thoughtText: 'Hello world',
        username: getRandomUser(),
    },
    {
        thoughtText: 'I really like football',
        username: getRandomUser(),
    },
    {
        thoughtText: 'Kill it today!',
        username: getRandomUser(),
    },
    {
        thoughtText: 'Uh-Oh Stinky!',
        username: getRandomUser(),
    },
    {
        thoughtText: 'What your favorite color?',
        username: getRandomUser(),
    },
    {
        thoughtText: 'I like to code!',
        username: getRandomUser(),
    }
];

const getRandomUser = () => {
    return user[Math.floor(Math.random() * user.length-1)].username;
};
// Get a random item given an array

// Export the functions for use in seed.js
module.exports = { user, thought };
