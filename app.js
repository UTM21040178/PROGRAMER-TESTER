import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // no importo esto
import express from "express"; // mi amigo lalo puso solo una S en el import
import { TestCats } from "./BACKEND/Controller/Cats.Controller.js"; // le falto el .js
import { TestEmployes } from "./BACKEND/Controller/Employees.Controller.js"; // le falto este import a lalo

// corregido y comentado por el jesus sanchez

dotenv.config()

mongoose.connect(process.env.urIbd)
.then(()=>{

    console.log("si sirve la conectada") // le puso una ,

})
.catch((eror)=>{
    console.log("no sirve wey")
})

const app = express()
app.use(cors())
app.listen(4000, ()=>{
    console.log("escuchando correctamente el server")
})

TestCats()
TestEmployes() // aqui lalo le puso solo una E al final

