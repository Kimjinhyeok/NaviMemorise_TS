import { isEmpty } from "lodash";
import MemoriseCardSeriesRepository from "../../infrastructure/api/memorise.card";
import MemoriseSeriesModel, { TranslationKey } from "../model/memoriseSeriesCard";

export default class MemoriseSeriesCardUsecase {
  private _repository:MemoriseCardSeriesRepository;
  
  constructor(repository: MemoriseCardSeriesRepository) {
    this._repository = repository
  }

  async getCardsByCategory(category = 0) {
    try {
      const res = await this._repository.getAll(category);

      /**
       * 카드 변환 처리
       */
      if(!(res instanceof Array) || res.length <= 0) {
        return null;
      }
      const CardList = res.map(item => {
        return new MemoriseSeriesModel(
          item.id,
          item.card_num,
          item.bible_name,
          item.bible_code,
          item.chapter,
          item.f_verse,
          item.l_verse ?? undefined,
          item.theme,
          item.category,
          item.series_num,
          {
            [TranslationKey.verse_gae] : item.verse_gae,
            [TranslationKey.verse_kor] : item.verse_kor
          }
        )
      });
      return CardList;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCard(cardNum = -1) {
    try {
      const res = await this._repository.get(cardNum);

      /**
       * 카드 변환 처리
       */
      if(isEmpty(res)) return null;
      
      const Card = new MemoriseSeriesModel(
        res.id,
        res.card_num,
        res.bible_name,
        res.bible_code,
        res.chapter,
        res.f_verse,
        res.l_verse ?? undefined,
        res.theme,
        res.category,
        res.series_num,
        {
          ['verse_gae'] : res.verse_gae,
          ['verse_kor'] : res.verse_kor
        }
      );
      
      return Card;

    } catch (error) {
      console.error(error);
      return null;
    }
  }
}