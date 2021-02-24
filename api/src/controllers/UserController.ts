import { Request, Response } from "express"
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
   const{ name, email } = request.body;
   //Entity manager, permite manipulacao de dado ....
   // toda acao com DB quem faz s os repositorios , cada entidade tem o seu 
   const usersRepository = getRepository(User)

   const usersAlreadyExistis = await usersRepository.findOne({
     email
   })
   if(usersAlreadyExistis) {
     return response.status(400).json({
       error: "User already exists",
     })
   }
   const user = usersRepository.create({
    name, 
    email
   })

   await usersRepository.save(user)
    return response.send()

  }

}

export { UserController }