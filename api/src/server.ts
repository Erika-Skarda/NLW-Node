import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from "./routes";
// npm i express
// npm i @types/express
// npm add tyypescript -D
// npx tsc --init
// npx ts-node-dev -D

// uso a ORM typeOrm
// npx typeorm migration:create -n CreateUsers
// npx typeorm migration:run

const app = express();

/*
* GET
* POST
* PUT
* DELETE
* PATCH => Alteraçõa específica
***/
app.use(express.json())
app.use(router)
app.listen(3333, () => console.log("Server is running"))