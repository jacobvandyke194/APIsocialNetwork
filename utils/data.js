const users = [
    { 
        username: "Jakey",
        email: "Jakey@gmail.com",
    },
    {
        username: "Abby",
        email: "Abby@gmail.com",
    },
    {
        username: "I Like Pie!",
        email: "pieguy@mail.com",
    },
    {
        username: "Zane",
        email: "zane@gmail.com",
    },
    {
        username: "WaffleGuy69",
        email: "waffles@gmail.com",
    },
    {
        username: "HelloBrother!",
        email: "zizzou@mail.com"
    },
    {
        username: "ZionWilliamson!",
        email: "zion@hotmail.com",
    },
    {
        username: 'GamersUnite',
        email: "Gamersarenicepeopleto@gmail.com",
    },
    {
        username: "Matthew123",
        email: "mattyice@gmail.com",
    },
    {
        username: "Arabella",
        email: "Bellaunicornprincess@gmail.com"
    },
    {
        username: "HewenttoJared",
        email: "jaredlikethejewlerystore@gmail.com",
    }
];

const randomized = () => {
    return users[Math.floor(Math.random() * users.length-1)].username;
};

const thoughts = [
    {
        thoughtText: 'I really like to smoke weed!',
        username: randomized(),
    },
    {
        thoughtText: 'What is your favorite Color?',
        username: randomized(),
    },
    {
        thoughtText: 'This is not very cool at all!',
        username: randomized(),
    },
    {
        thoughtText: 'What the hell is happening?',
        username: randomized(),
    },
    {
        thoughtText: 'Umm Hello?',
        username: randomized(),
    },
    {
        thoughtText: 'What is wrong with these soccer geeks?',
        username: randomized(),
    },
    {
        thoughtText: 'Andrew Tate is a really terrible dude!',
        username: randomized(),
    }
];
module.exports = { users, thoughts };
