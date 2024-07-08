import Http from './http';
const API_URL = "/resource";

export default class MemoriseCardRepository  {

  async getAll(code:number):Promise<any> {
    const params = { data: { code } }; 
    try {
      const res = await Http.get(API_URL, params);
  
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async get(cardNum: number):Promise<any> {
    const params = { data: { cardNum } }; 
    try {
      const res = await Http.get(API_URL, params);
  
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}