import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors()); // da para definir qual url vai ter acesso à nossa API
app.use(express.json());
app.use(routes);

app.use(
  '/uploads', 
  express.static(
    path.resolve(__dirname, '..', 'uploads')
));

app.use(errors());

app.listen(3333);

// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando no sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end
