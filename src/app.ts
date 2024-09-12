import express, { Application, Request, Response } from 'express';
import sequelize from './models/database';
import User from './models/user.model';

const app: Application = express();
app.use(express.json()); // Middleware para parsear JSON

// Ruta de ejemplo para crear un usuario
app.post('/users', async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;

    const user = await User.create({ username, email });
    res.status(201).json(user);
    //res.send('creando usuarios');
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

app.get('/', async (req: Request, res: Response) =>{
  res.send('accedimos');
});

// Sincronizar la base de datos y levantar el servidor
sequelize.sync({ force: true })
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  })
  .catch((err: Error) => {
    console.error('Error al sincronizar la base de datos:', err);
  });
