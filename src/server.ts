import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";

const app = express()


app.use(cors());
app.use(express.json());

app.get ("/", (req, res)=>{
    res.send({
        success: true,
        message: "Hello from Library management server"
    })
})

async function server () {
    try {
        await mongoose.connect(config.database_url as string)

        app.listen(config.port, ()=>{
            console.log (` server is running on ${config.port}`)
        })
    }

    catch (error){
        console.log (error)
    }
}

server()