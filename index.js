const express = require('express')
const fs = require('fs');
const app = express();
const path = require('path');
const port = 3000;
const usersJsonPath = path.join(__dirname, 'data', 'users.json');

//middleware
app.use(express.json());

let users = JSON.parse(fs.readFileSync(usersJsonPath, 'utf-8'));

app.get('/api/v1/users', async (req, res) => {
    if (await users) {
        res.status(200).json({
            status: 'success',
            data: users
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'User doesnt exist'
        });
    }
});

app.get('/api/v1/users/:id', async (req, res) => {
    let user = await users.find(({id}) => id === req.params.id);
    if (user) {
        res.status(200).json({
            status: 'success',
            data: user
        })
    }
    else {
        res.status(404).json({
            success: false,
            message: 'User doesnt exist'
        });
    }
});

app.post('/api/v1/users',async (req, res) => {
    const newId = (+users[users.length - 1].id + 1).toString();
    const newUser = Object.assign({id: newId}, req.body);
    users.push(newUser);
    await fs.writeFile(usersJsonPath, JSON.stringify(users),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    user: newUser
                }
            });
        }
    );
});

app.put('/api/v1/users/:id',  async (req, res) => {
        let user = await users.find(({id}) => id === req.params.id);
        if (user) {
            user.name = req.body.name;
             await fs.writeFile(usersJsonPath,JSON.stringify(users),
                     err => {
                 res.status(201).json({
                     status: 'success',
                     data: {
                         user: user
                     }
                 });
             });
        } else {
            res.status(400).json({
                success: false,
                message: 'User doesnt exist'
            });
        }
});
app.delete('/api/v1/users/:id', async (req, res) => {
    let user = await users.find(({id}) => id === req.params.id);
    if (user) {
        const index = users.indexOf(user);
        if (index > -1) {
            users.splice(index, 1);
        }
        await fs.writeFile(usersJsonPath, JSON.stringify(users),
            (err) => {
                if (err) console.error(err)
            });
        res.status(200).json({
            success: true,
            data: users[req.params.username],
            message: 'User deleted'
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'User doesnt exist'
        });
    }
});

app.listen(port, () => console.log(`Listening at port ${port}`));