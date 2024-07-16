export class BibleInfo {

  constructor(
    private bible_code:number,
    private bible_name:string,
    private bible_name_eng:string,
    private short_name:string,
    private short_name_eng:string,
    private _chapter:number,
  ){}

  get bibleCode() {
    return this.bible_code;
  }
  get bibleName() {
    return this.bible_name;
  }
  get bibleName_eng() {
    return this.bible_name_eng;
  }
  get shortName() {
    return this.short_name;
  }
  get shortName_eng() {
    return this.short_name_eng;
  }
  get chapter() {
    return this._chapter;
  }
}