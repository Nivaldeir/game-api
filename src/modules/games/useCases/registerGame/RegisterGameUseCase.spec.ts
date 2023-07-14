import { IGameDTO } from "../../infra/entities/Game";
import { IGameRepository } from "../../infra/repositories/IGameRepository";
import { RegisterGameUseCase } from "./RegisterGameUseCase"

const RegisterGameUseCaseMock = RegisterGameUseCase as jest.Mock<RegisterGameUseCase>
describe('Register Game use case', ()=>{
  let sut: RegisterGameUseCase;
  const data: IGameDTO = {
    "name":"Pac-man",
    "releaseData": "1981",
    "designer": "Toru",
    "developer": "Teste",
    "genre": "Teste",
    "mode":"Single",
    "platform":"Arcade"
  }

  const mockGameRepository: IGameRepository = {
    register: jest.fn().mockResolvedValueOnce({})
  }
  beforeEach(()=>{
    sut = new RegisterGameUseCaseMock(mockGameRepository)
  })
  test('should be able to return an error if releaseData equals 1980', async()=>{
    const dataError:IGameDTO = {...data, releaseData:"1980"}
    const response = sut.execute(dataError)
    await expect(response).rejects.toThrow()
  })
  test('should be able to create a new register gamer', async()=>{
    const response = await sut.execute(data)
    expect(response).toBe(undefined)
  })
})