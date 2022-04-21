require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        // establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    // await pausa();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear tarea
                const desc = await leerInput('Descripción: ');
                console.log(desc.desc);
                tareas.crearTarea(desc.desc);
                break;
            case '2':
                tareas.listadoCompleto()
                break;
        }


        guardarDB(tareas.listadoArr)
        await pausa();

    } while (opt !== '0');


}
main()