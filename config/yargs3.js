
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
        describe: 'Muestra la lista de la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Este es el numero donde quieres la tabla'
    })

    .check((argv, options) => {
        if (isNaN(argv.b,)) {
            throw  'La base tiene que ser un número'
        }
        return true;
    })
    .argv

module.exports = argv;
