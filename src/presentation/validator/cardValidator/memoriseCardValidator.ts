import ValidationResult from "../validationResult";

export default abstract class MemoriseCardInputValidator {
  
  private MemoriseCardInputValidated:{[key:string]:boolean} = {
    bibleName: true,
    bibleNumber: true,
    chapter: true,
    verse1: true,
    verse2: true,
    theme: true,
    seriesNumber: true, 
    content: true,
  }

  constructor(
    private bibleName:string,
    private bibleNumber:number,
    private chapter: number,
    private verse1: number,
    private content: string,
    private seriesNumber: number,
    private verse2?: number,
    private theme?: string,
  ) {

  }

  protected updateValidated(property:string, value:boolean) {
    if(this.MemoriseCardInputValidated[property] !== undefined) { 
      this.MemoriseCardInputValidated[property] = value;
    }
  }

  getValidated() { 
    return Object({...this.MemoriseCardInputValidated});
  }
  private numberTest(value:number) {
    return value && value > 0;
  }
  private stringTest(value:string) {
    return value && value.trim().length > 0;
  }
  protected bibleNumberTest() {
    return this.bibleNumber && this.bibleNumber > 0 && this.bibleNumber <= 66;
  }

  protected bibleNameTest() {
    return this.stringTest(this.bibleName);
  }

  protected chapterTest() {
    return this.numberTest(this.chapter);
  }

  protected verse1Test() {
    return this.numberTest(this.verse1);
  }

  protected verse2Test() {
    return this.verse2 !== undefined 
          ? this.numberTest(this.verse2) 
          : true;
  }

  protected themeTest() {
    return this.theme !== undefined
          ? this.stringTest(this.theme) 
          : true;
  }

  protected contentTest() {
    return this.stringTest(this.content);
  }

  protected seriesNumberTest() {
    return this.numberTest(this.seriesNumber);
  }

  abstract test():ValidationResult;
}