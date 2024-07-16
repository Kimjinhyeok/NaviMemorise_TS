import ValidationResult from "../validationResult";
import MemoriseCardInputValidator from "./memoriseCardValidator";

export default class CustomMemoriseCardInputValidator extends MemoriseCardInputValidator {

  constructor(
    bibleNumber:number,
    bibleName:string,
    chapter:number,
    verse1:number,
    content:string,
    seriesNumber:number,
    verse2?:number,
    theme?:string
  ) {
    super(bibleName, bibleNumber, chapter, verse1, content, seriesNumber, verse2, theme);
  }
  test(): ValidationResult {
    if(!this.bibleNumberTest()) {
      this.updateValidated('bibleNumber', false);
    } if (!this.bibleNameTest()) {
      this.updateValidated('bibleName', false);
    } if (!this.chapterTest()) {
      this.updateValidated('chapter', false);
    } if (!this.verse1Test()) {
      this.updateValidated('verse1', false);
    } if (!this.verse2Test()) {
      this.updateValidated('verse2', false);
    } if (!this.contentTest()) {
      this.updateValidated('content', false);
    } if (!this.themeTest()) {
      this.updateValidated('theme', false);
    } if (!this.seriesNumberTest()) {
      this.updateValidated('seriesNumber', false);
    }

    return this.getValidated();
  }
}