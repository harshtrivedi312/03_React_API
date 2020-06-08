import express from "express";
import bodyParser from "body-parser";
import bookRoute from './server/routes/BookRoutes';
import config from 'dotenv';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const port = process.env.PORT || 8000;

config.config()

//welcome message
app.get("/",(request,response)=>{
    response.status(200).send({message:"wellcome to book api"});
})

app.use("/api/books",bookRoute);

app.listen(port,()=>{
    console.log(`book API server is running on ${port}`);
    
})

export default app;