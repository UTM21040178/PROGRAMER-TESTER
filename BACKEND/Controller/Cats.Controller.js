import { CatsModel } from "../Model/Cats.Model.js"; // no le puso .js

CatsModel.create({

     raza: "Siames",

     color: "Blanco y negro",

     name: "Soponcio"



})


export const TestCats = ()=>{
    console.log("Controlador de gatos")
}