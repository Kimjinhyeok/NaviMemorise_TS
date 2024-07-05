import MemoriseModel, { MemoriseModelParam } from "./memorise_card";


type CustomMemoriseParam = MemoriseModelParam & {
  userID: string
}
export class CustomMemoriseModel extends MemoriseModel {
  private _userID: string;

  constructor(param: CustomMemoriseParam) {
    super(param);
    this._userID = param.userID;
  }

  get userID() { return this._userID }
}