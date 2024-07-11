import { MemoriseCustomCardType } from "../../domain/model/memoriseCustomCard";
import Http from "./http"
const API_URL = "/RC/oyo";

export default class MemoriseCustomCardRepository {

  async get(cardNum:number) {
    try {
      const res = await Http.get(`${API_URL}/${cardNum}`);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAll() {
    try {
      const res = await Http.get(API_URL);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async save(data:MemoriseCustomCardType) {
    try {
      const res = await Http.post(API_URL, { data });
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(data:MemoriseCustomCardType) {
    try {
      const res = await Http.put(API_URL, { data });
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async remove(cardNum:number) {
    try {
      const res = await Http.delete(`${API_URL}/${cardNum}`);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}