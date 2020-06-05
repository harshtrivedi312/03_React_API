const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 2021;
const Pool = require("pg").Pool;

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "api",
    password: "Mainboard1",
    port: 5432
});



const getUser = (request, response) => {

    pool.query("select * from users", (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })

}

app.get("/", (request, response) => {

    response.json({ message: "Hello its connected" });

})
app.get("/users", getUser);


const getSingleUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query("select * from users where id =$1", [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(200).json(result.rows)
    })

}

app.get("/singleuser/:id", getSingleUser);



app.post("/newuser", (request, response) => {
    const { name, email, address, phone_number } = request.body;
    pool.query("insert into users(name,email,address,phone_number) values($1,$2,$3,$4)", [name, email, address, phone_number], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).json({ message: "user has been added" })
    })


})

app.delete("/usergone/:id",(request,response)=>{
    const id = parseInt(request.params.id)
    pool.query("delete from users where id = $1",[id],(error,result)=>{
        if(error){
            throw error
           // response.status(400).json({message:"This is an error"})
        }
        response.status(200).send(`user deleted with id: ${id}`)
    })
})

//update one variable 
//update  multiple variable's

app.put("/edituser/:id",(request,response)=>{
    const id = parseInt(request.params.id)
    const {name,email,address,phone_number} = request.body
    pool.query('update users set name = $1,email = $2,address= $3, phone_number=$4 where id=$5 RETURNING *',[name,email,address,phone_number,id],(error,result)=>{
        if( error){
            throw error
           // response.status(400).json({message:"This is an error"})
        }
        if (typeof result.rows === "undefined"){
            response.status(404).send(`Data Not Found`)
        }
        else if (Array.isArray(result.rows)&&result.rows.length < 1){
            response.status(404).send(`user Not found with given ID ${id}`)
        }else{
        response.status(200).send(`user data is updated with id: ${result.rows[0].id}`)
    }
    })
})






app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);

})



