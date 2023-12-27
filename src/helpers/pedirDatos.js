/* eslint-disable no-unused-vars */
import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}


export const getItemId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((e) => e.id === id); 

        if (item) {
            resolve(item) 
        } else {
            reject({
                error: "El producto no existe"
            })
        }

    })
}