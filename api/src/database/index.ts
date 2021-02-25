import { Connection, createConnection, getConnection, getConnectionOptions } from 'typeorm';
// Criar DB pra teste p n usar teste em produção
// adicionar .env no package
export default async(): Promise<Connection> => {
  // Pegar informações do ormconfig --> getConnectionOptions pega elas
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    //Object pegará tod o objeto do ormconfig
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' 
        ? './src/database/database.test.sqlite' 
        : defaultOptions.database
    })
  )
}
