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

    const username = req.body.username;
    const password = req.body.password;

    let loggedIn = false;

    userPasses.forEach(elem=>{
        if (elem.username == username && elem.password == password) {
            loggedIn = true;
        }
    });

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
