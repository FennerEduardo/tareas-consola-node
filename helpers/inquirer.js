const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();

    console.log('=========================='.green);
    console.log('   Selecciona una opción '.white);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
}


const pausa = async () => {
    console.log('\n');
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'pausa',
            message: `\nPresione ${'ENTER'.green} para continuar\n`,

        }
    ])
}

const leerInput = async (message) => {
    // console.log('\n');
    return { desc } = await inquirer.prompt([
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }

        }
    ])
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}