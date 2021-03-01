// para o memento de teste o servidor real n seja executado
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import createConnection from './database';
import { router } from './routes';
import { AppError } from './errors/AppErrors';

// npx typeorm migration:create -n CreateSurveys
// npm run typeorm migration:run
// npm i jest @types/jest -D
// npx jest --init
// desmarcar bail se algum falhar n da continuidade e o testMatch -> caminho e pastas onde ficarão os testes
// npm i ts-jest -D --> Preset pra trabalhar typescript com testes
// descomentar preset e por ts-jest
// npm i supertest --> jest n trabalha bem com teste de integração
// posttest pra a pagar o db
// npx typeorm  migration:create -n CreateSurveysUsers
// npm run typeorm migration:run

//nodemailer usar em conjunto com SMTP -> ethreal(SMTP service) n precisa criar conta
// npm install nodemailer
// handlebars pra customizar email

//localhost:3333/answrs/${nota}?u={id_usuario}

//npm i yup

// remover
  // Refatorar pois nem sempre rm funciona
  //"posttest": "rm ./src/database/database.test.sqlite"

 //  npm i express-async-errors
 //  
createConnection();
// vai substituir o database
const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`
  })
})

export { app }