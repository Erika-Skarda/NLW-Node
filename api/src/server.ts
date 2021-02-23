import express, { response } from 'express';
// npm i express
// npm i @types/express
//npm add tyypescript -D
// npx tsc --init
// npx ts-node-dev -D
const app = express();

/*
* GET
* POST
* PUT
* DELETE
* PATCH => Alteraçõa específica
***/
app.get('/', (request, response) => {
  return response.json({ message: "Hello" })
})

app.post('/', (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!!!" })
})
app.listen(3333, () => console.log("Server is running"))