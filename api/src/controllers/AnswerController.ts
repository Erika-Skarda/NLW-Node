import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppErrors';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

// http://localhost:3333/answrs/1?u=95....uuid
class AnswerController {
  // **
  // Route Params => Parâmetros que compõe a rota
  // routes.get("/answers/:value")
  // Query Params => Busca, paginação, não obrigatórios chave = valor
  // ?
  
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if(!surveyUser) {
      throw new AppError("Survey User does not exists")
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController }