const mysql = require('mysql2');

// Configuración de la conexión a MySQL
let connection

const crearConexion = () => {
    connection = mysql.createConnection({
        host: 'localhost', // Cambia esto según tu configuración
        user: 'root', // Cambia esto según tu configuración
        password: 'root', // Cambia esto según tu configuración
        database: 'restaurante' // Cambia esto según tu configuración
    });
}

// Conectar a la base de datos
const conectar = () => {
    crearConexion()
    connection.connect(err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}

const desconectar = () => {
    connection.end(()=>{});
}


const funciones = {
    obtenerUsuarios: (callback) => {
        conectar()
        const query = 'SELECT * FROM usuarios';
        connection.query(query, (err, results) => {
            desconectar()
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },
    obtenerEntradas: (callback) => {
        conectar()
        const query = `SELECT * FROM platos where tipo = 'E'`;
        connection.query(query, (err, results) => {
            desconectar()
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },
    obtenerPlatosFuertes: (callback) => {
        conectar()
        const query = `SELECT * FROM platos where tipo = 'P'`;
        connection.query(query, (err, results) => {
            desconectar()
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },
    obtenerBebidas: (callback) => {
        conectar()
        const query = `SELECT * FROM platos where tipo = 'B'`;
        connection.query(query, (err, results) => {
            desconectar()
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },
    obtenerCocteles: (callback) => {
        conectar()
        const query = `SELECT * FROM platos where tipo = 'C'`;
        connection.query(query, (err, results) => {
            desconectar()
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }
}

module.exports = (funciones);