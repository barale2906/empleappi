import { Sequelize } from 'sequelize';

// Configuración de la conexión a MySQL
const sequelize = new Sequelize('empleappi', 'root', 'Alexander_2906*', {
  host: 'localhost',        // Cambia a la IP del servidor MySQL si no está en localhost
  dialect: 'mysql',         // Dialecto para MySQL
  port: 3306,               // Puerto por defecto de MySQL (ajusta si usas un puerto diferente)
  logging: false,           // Desactiva el logging si prefieres no ver las consultas en la consola
  timezone: '-05:00',  // Configura a UTC
});

export default sequelize;
