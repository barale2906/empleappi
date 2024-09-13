"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./models/database"));
const user_model_1 = __importDefault(require("./models/user.model"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware para parsear JSON
// Ruta de ejemplo para crear un usuario
app.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await user_model_1.default.create({ username, email, password });
        res.status(201).json(user);
        //res.send('creando usuarios');
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
    }
});
app.get('/', async (req, res) => {
    res.send('accedimos');
});
// Sincronizar la base de datos y levantar el servidor
database_1.default.sync()
    .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });
})
    .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err);
});
