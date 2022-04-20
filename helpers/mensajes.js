require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {

        console.clear();
        console.log('=========================='.green);
        console.log('   Selecciona una opción '.green);
        console.log('==========================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar Tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(S)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        // creando una interfaz para las entradas y salidas
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        // Generando pregunta de inicio
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close() // Cerrar interfaz para que no espere más respuestas del usuario
            resolve(opt) //se resuelve la promesa, por lo tanto retornará la opción seleccionada
        })
    })

}

const pausa = () => {
    return new Promise(resolve => {
        // creando una interfaz para las entradas y salidas
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        // Generando pregunta de inicio
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close() // Cerrar interfaz para que no espere más respuestas del usuario
            resolve() // se resuelve la promesa, es decir se ejecuta la función sin retornar nada
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}