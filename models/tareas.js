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

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas