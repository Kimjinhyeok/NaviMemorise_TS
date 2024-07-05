export type MemoriseModelParam = {
  id: number,
  bibleName: string,
  chapter: number,
  verse1: number,
  verse2?: number,
  content: string,
  category?: string,
  theme?: string,
  createdDate: Date,
}

export default class MemoriseModel {
  private _id: number;
  private _bibleName: string;
  private _chapter: number;
  private _verse1: number;
  private _verse2?: number;
  private _content: string;
  private _category?: string;
  private _theme?: string;
  private _createdDate: Date;

  constructor(param: MemoriseModelParam) {
    this._id = param.id;
    this._bibleName = param.bibleName;
    this._chapter = param.chapter;
    this._verse1 = param.verse1;
    this._verse2 = param.verse2;
    this._content = param.content;
    this._category = param.category;
    this._theme = param.theme;
    this._createdDate = param.createdDate;
  }

  get id(){ return this._id };
  get bibleName(){ return this._bibleName };
  get chapter(){ return this._chapter };
  get verse1(){ return this._verse1 };
  get verse2(){ return this._verse2 };
  get content(){ return this._content };
  get category(){ return this._category };
  get theme(){ return this._theme };
  get createdDate(){ return this._createdDate };
}

