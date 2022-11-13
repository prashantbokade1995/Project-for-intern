
const express = require("express");
const cors = require("cors")
require("./db/config");
const User = require("./db/User");
// const UserInp = require("./db/InputWork")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/home", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.get("/home", async (req, resp) => {
    let Users = await User.find();
    resp.send(Users);
})

app.listen(5050);