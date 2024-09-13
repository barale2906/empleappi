"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    development: {
        username: 'root', // Cambia esto según tu configuración
        password: 'Alexander_2906*',
        database: 'empleappi',
        host: 'localhost',
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'my_database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'my_database_prod',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
