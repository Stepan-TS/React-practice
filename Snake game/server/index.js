const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/gameUsers", async(req, res) => {
    try{
        const {user_points, userName} = req.body;
        const newUser = await pool.query(
            "INSERT INTO gameUsers (user_points,user_name) VALUES($1,$2)",
            [user_points,userName]
        );
        res.json(newUser.rows);
    }catch(err){
        console.log(err.message)
    }
})

app.get("/gameUsers", async(req, res) => {
    try{
        const allPersons = await pool.query("SELECT * FROM gameUsers ORDER BY user_points DESC");
        res.json(allPersons.rows)

            
    }catch (err){
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});