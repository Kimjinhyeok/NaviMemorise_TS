import MemoriseCardModel from './memoriseCard';

export type MemoriseModelParam = {
  id: number,
  bibleName: string,
  chapter: number,
  verse1: number,
  verse2?: number,
  content: string,
  category?: string,
  theme?: string,
  createdDate?: Date,
}

export default class MemoriseSeriesModel extends MemoriseCardModel {

  private _translation: {
    [key: string]: string
  };

  constructor(
    id = '',
    cardNum = 0,
    bibleName = '',
    bibleCode = 0,
    chapter = 0,
    verse1 = 0,
    verse2 = 0,
    theme = '',
    category = '',
    seriesNum = 0,
    translation = {}
  ) {
    super(
      id, cardNum, bibleName, bibleCode, chapter, verse1, verse2, 
      theme, category, seriesNum
    );
    this._translation = translation;
  }

  getContent(translationKey: string) {
    return this._translation[translationKey] || '사용할 수 없는 번역입니다.'; 
  }
}

