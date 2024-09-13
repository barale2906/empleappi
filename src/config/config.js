module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_development',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    // Añadir ruta absoluta para modelos
    models: [__dirname + '/../models/*.ts'], // Opcional, si quieres cargar todos los modelos desde esta ruta
  },
  // Otras configuraciones (test, production, etc.)
};


/* {
  "development": {
    "username": "root",
    "password": "Alexander_2906*",
    "database": "empleappi",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
} */
