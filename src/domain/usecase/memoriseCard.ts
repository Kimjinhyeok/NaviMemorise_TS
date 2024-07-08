import MemoriseCardRepository from "../../infrastructure/api/memorise.card";

export default class MemoriseCardUsecase {
  private _repository:MemoriseCardRepository;
  
  constructor(repository: MemoriseCardRepository) {
    this._repository = repository
  }

  async getCardByCategory(category = 0) {
    try {
      const res = await this._repository.getAll(category);

      /**
       * 카드 변환 처리
       */
    } catch (error) {
      
    }
  }

  async getOneCard(cardNum = -1) {
    try {
      const res = await this._repository.get(cardNum);

      /**
       * 카드 변환 처리
       */
    } catch (error) {
      
    }
  }
}