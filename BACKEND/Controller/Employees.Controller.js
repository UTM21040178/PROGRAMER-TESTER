import { EmployeesModel } from "../Model/Employees.model.js" // le falta el .js al inicio


EmployeesModel.create({

     name: "Eduardo",

     lastname: "Beltran",

     edad: 39



})


export const TestEmployes = ()=>{
    console.log("Controlador de los que trabajan ahi")
}