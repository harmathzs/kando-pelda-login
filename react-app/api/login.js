export default function handler(req, res) {
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
}