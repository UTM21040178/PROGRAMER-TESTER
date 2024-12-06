import { Schema, model } from "mongoose";

export const EsquemaGatos = new Schema({

    raza:{
        type: String
    },

    color: {

        type: String 
    }, // aqui le puso Number

    name: {
        type: String
    }



})

export const CatsModel = new model("Tabla de gatos", EsquemaGatos)