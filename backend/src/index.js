import express from 'express';
import dotenv from 'dotenv';
import factionsRoutes from './routes/faction.routes.js';
import mobileSuitsRoutes from './routes/mobileSuits.routes.js';


dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// rutas
app.use('/factions', factionsRoutes);
app.use('/mobile-suits', mobileSuitsRoutes);


app.get('/', (req, res) => {
  res.send('Backend Gundam activo 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
