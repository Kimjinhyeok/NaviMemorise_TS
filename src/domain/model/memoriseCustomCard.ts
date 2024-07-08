import MemoriseCardModel from "./memoriseCard";

export class MemoriseCustomModel extends MemoriseCardModel {

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
    private content: string,
    private _userID: string,
  ) {
    super(
      id, cardNum, bibleName, bibleCode, chapter, verse1, verse2, 
      theme, category, seriesNum
    );
  }
  getContent(translationKey?: string): string {
    return this.content
  }
  get userID() { return this._userID }
}