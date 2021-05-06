require('colors');
//Importamos el paquete por default de Node para manejar archivos fs
const fs = require('fs');
const path = require('path');

// Guardamos el path a nuestro archivo task.json
const filepath = path.join(__dirname, '../db/task.json');

//Funcion para cargar task desde task.json
const loadtask = () => {
    let listalk = {};
    //nos muestra el path o ruta de nuestro proceso
    console.log("Ruta absoluta del proceso Node: ".yellow, process.cwd())

    //Nos muestra el path o ruta de nuestro fake db.json
    console.log("Ruta absoluta de nuestra Base de Datos: ".yellow, filepath)

    try {
        listTask = require(filepath);
    } catch (error) {
        console.log("Error cargando lista de db".red, error);
        listalk = {}
    }
    return listalk;
}


//Funcion para guardar los task en task.json
const saveTask = (listTask) => {

    let data = JSON.stringify(listTask);


    fs.writeFile(filepath, data, (error) => {
        if (error) {
            throw new Error("Error create by me: --", error);

        }
    })

}

module.exports = {
    loadtask,
    saveTask
}