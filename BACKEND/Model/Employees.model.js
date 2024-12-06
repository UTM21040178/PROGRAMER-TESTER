import { Schema, model } from "mongoose";

export const EsquemaEmployees = new Schema({

    name:{
        type: String
    },

    lastName: {

        type: String
    },

    age: {
        type: String
    }



})

export const EmployeesModel = new model("Tabla de trabajadores", EsquemaEmployees)