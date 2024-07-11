import MemoriseCustomCardRepository from "../../infrastructure/api/memoriseCustomCard";

export default class MemoriseCustomCardUsecase {

  constructor(
    private repository:MemoriseCustomCardRepository
  ){}

  async get(cardNum:number = -1) {
    try {
      const res = await this.repository.get(cardNum);

      return res;
    } catch (error) {
      throw error;
    }
  }
  async getAll() {
    try {
      const res = await this.repository.getAll();

      return res;
    } catch (error) {
      throw error;
    }
  }
  async save(
    bible_code:number,
    content:string,
    chapter:number,
    f_verse:number,
    l_verse?:number,
    theme?:string,
  ) {
    try {
      
      const data = {
        bible_code,
        theme : theme ?? "",
        content,
        chapter,
        f_verse,
        l_verse : l_verse ?? -1,
      }
      const res = await this.repository.save(data);

      return res;
    } catch (error) {
      throw error;
    }
  }
  async update(
    bible_code:number,
    content:string,
    chapter:number,
    f_verse:number,
    l_verse?:number,
    theme?:string,
  ) {
    try {
      const data = {
        bible_code,
        theme : theme ?? "",
        content,
        chapter,
        f_verse,
        l_verse : l_verse ?? -1,
      }
      const res = await this.repository.update(data);

      return res;
    } catch (error) {
      throw error;
    }
  }
  async remove(cardNum:number) {
    try {
      const res = await this.repository.remove(cardNum);

      return res;
    } catch (error) {
      throw error;
    }
  }  
}