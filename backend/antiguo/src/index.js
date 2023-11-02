import app from './app.js';
import { PORT } from './config.js';
import { mongodb } from './db.js';

mongodb();

app.listen(PORT);
console.log('Server on port', PORT);
