const  express = require('express');

const users = require('./MOCK_DATA.json');

const app = express();

app.use(express.json());

// app.get("/", (req, res) =>{
//     res.status(202).json(users);
// })

// app.get("/user/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(u => u.id === id);

//     if (user) {
//         return res.status(200).json(user);
//     }

//     return res.status(404).json({ message: "User not found" });
// });


app.post("/user", (req, res) =>{
    const newUser = req.body;
    users.length += 1;
    newUser.id = users.length;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put("/user/:id", (req, res) =>{
    const id = Number(req.params.id);
    const usrIndx = users.findIndex(u =>u.id === id);
    console.log(usrIndx);
    if(usrIndx !== -1){
        res.status(200).json({...users[usrIndx], ...req.body});
    }else{
       res.status(404).json({ message: "User not found" });
    }
})

app.patch("/user/:id", (req, res) =>{
    const id = Number(req.params.id);
    const usrIndx = users.findIndex(u =>u.id === id);
    console.log(usrIndx);
    if(usrIndx !== -1){
        res.status(200).json({...users[usrIndx], ...req.body});
    }else{
       res.status(404).json({ message: "User not found" });
    }
});

app.delete("/user/:id", (req, res) =>{
    const id = Number(req.params.id);
    const indx = users.find(u =>u.id === id);
    if(!indx){
        return res.status(404).json({ message: "User not found" });
    }else{
        users.splice(indx, 1);
        return res.status(204).json({message: "User deleted successfully"});
    }
})


app.listen(8000, () =>{
    console.log("Server started http://localhost:8000");
})
