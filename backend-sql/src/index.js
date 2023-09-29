import app from './app.js';
import { PORT } from './config.js';

// El servidor está escuchando en el puerto "3000"
app.listen(PORT);
console.log('Server running on port', PORT);
