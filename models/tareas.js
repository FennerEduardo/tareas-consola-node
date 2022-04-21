require('colors');
const Tarea = require("./tarea");

/**
 * _listado:
 *      {'uuid-1221212-2323232212:' { id:12, desc: 'hacer..', completadoEn: 121212}}
 */
class Tareas {
    _listado = {};

    constructor() {
        this._listado = {}
    }

    get listadoArr() {
        // const list = []

        // Object.keys(this._listado).forEach(key => {
        //     const tarea = this._listado[key]
        //     list.push(tarea)
        // })

        return Object.values(this._listado)
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            const { desc, completadoEn } = tarea;
            const idx = (completadoEn) ? `${index + 1}.`.green : `${index + 1}.`.red;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`)

        })
    }
}

module.exports = Tareas