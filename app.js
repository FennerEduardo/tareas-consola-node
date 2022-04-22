require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer');
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
            case '3':
                tareas.listarCompletadasPendientes(true)
                break;
            case '4':
                tareas.listarCompletadasPendientes(false)
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                // console.log(ids);
                const ok = await confirmar('¿Está seguro de completar las tareas seleccionadas?')
                if (ok) {
                    tareas.toggleCompletadas(ids);
                    console.log('Tareas completadas correctamente'.green);
                }
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro de eliminar esta tarea?');
                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log('Tarea eliminada correctamente'.green);
                    }
                }
                break;
        }


        guardarDB(tareas.listadoArr)
        await pausa();

    } while (opt !== '0');


}
main()