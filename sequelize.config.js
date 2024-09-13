const path = require('path');

module.exports = {
  'config': path.resolve('src/config/database.ts'),  // Ruta al archivo de configuración de la base de datos
  'models-path': path.resolve('src/models'),         // Ruta a los modelos
  'migrations-path': path.resolve('src/migrations'), // Ruta a las migraciones
  'seeders-path': path.resolve('src/seeders'),       // Ruta a los seeders
};
