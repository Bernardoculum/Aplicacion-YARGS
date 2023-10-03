/**
 * se agrega un describe para que en la ayuda del uso de la app co help
 * describa de mejor forma la aplicación
 */

const { options } = require('yargs');

//! Mi version mejorada
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
        
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        //default: false, se quita ya que esta por defaul en la app principal
        describe: 'Muestra la lista de la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        // default: 10,
        describe: 'Este es el numero donde quieres la tabla'
    })

    .check((argv) => {
        if (isNaN(argv.b, options)) {
            throw  'La base tiene que se ser un número'
        }
        return true;
    })
    .argv

module.exports = argv;
