const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const userPasses = [
        {
            username: 'joe',
            password: 'screwdriver',
        },
    ];

    console.log('body', req.body);

    const { username, password } = req.body;

    const loggedIn = userPasses.some(
        user => user.username === username && user.password === password
    );

    if (loggedIn) {
        return res.status(200).json({
            loggedin: true,
            username: username,
        });
    } else {
        return res.status(401).json({
            loggedin: false,
            message: 'Bad username or password'
        });
    }
});

const port = 3333;
app.listen(port, () => {
  console.log(`Backend Express Server running on port ${port}`);
});
