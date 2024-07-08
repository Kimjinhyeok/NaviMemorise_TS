export default abstract class MemoriseCardModel {

  constructor(
    private _id: string,
    private _cardNum: number,
    private _bibleName: string,
    private _bibleCode: number,
    private _chapter: number,
    private _verse1: number,
    private _verse2: number,
    private _theme: string,
    private _category: string,
    private _seriesNum: number,
  ) {}

  get id() { return this._id };
  get bibleCode() { return this._bibleCode };
  get bibleName() { return this._bibleName };
  get cardNum() { return this._cardNum };
  get category() { return this._category };
  get chapter() { return this._chapter };
  abstract getContent(translationKey?: string):string;
  get seriesNum() { return this._seriesNum };
  get theme() { return this._theme };
  get verse1() { return this._verse1 };
  get verse2() { return this._verse2 };
}