const mongos = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());

mongos.connect('mongodb://localhost:27017/librarydb').
    then(() => {
        console.log("Connected to MongoDB successfully.");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

const userSchema = new mongos.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});

const User = mongos.model('User', userSchema);

async function insertUser() {
    try {
        const newUser = new User({
            name: "Alice Smith",
            age: 28,
            email: "alice.smith@example.com",
            password: "alicepassword"
        })
        await newUser.save();
    } catch (err) {
        console.error("Error inserting user:", err);
    }
}

async function displayUser() {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.error("Error displaying user:", err);
    }
}

app.get('/insert', async (req, res) => {
    await insertUser();
    res.send("User Inserted");
});

app.get('/display', async (req, res) => {
    const users = await displayUser();

    let html =
        `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Sample Table</title>
        <style>
            table {
                width: 80%;
                border-collapse: collapse;
                margin: 20px auto;
            }
            th, td {
                border: 1px solid #333;
                padding: 10px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
        `
            users.forEach(user => {
                html +=
            `<tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>`
            });

            html += `</tbody>
    </table>

    </body>
    </html>
    `
    res.send(html);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})