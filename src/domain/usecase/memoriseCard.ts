import { isEmpty } from "lodash";
import MemoriseCardRepository from "../../infrastructure/api/memorise.card";
import MemoriseModel from "../model/memorise_card";

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
      if(!(res instanceof Array) || res.length <= 0) {
        return null;
      }
      const CardList = res.map(item => {
        return new MemoriseModel({
          bibleName: item.bible_name,
          chapter: item.chapter,
          verse1: item.f_verse,
          verse2: item.l_verse ?? undefined,
          content: item.verse_gae,
          id: item.id,
        })
      });

      return CardList;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getOneCard(cardNum = -1) {
    try {
      const res = await this._repository.get(cardNum);

      /**
       * 카드 변환 처리
       */
      if(isEmpty(res)) return null;
      
      const Card = new MemoriseModel({
        bibleName: res.bible_name,
        chapter: res.chapter,
        verse1: res.f_verse,
        verse2: res.l_verse ?? undefined,
        content: res.verse_gae,
        id: res.id,
      });
      
      return Card;

    } catch (error) {
      console.error(error);
      return null;
    }
  }
}