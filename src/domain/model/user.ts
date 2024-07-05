
export type UserParam = {
  id: string,
  name: string,
  email: string,
  mobile?: string,
}
export default class UserModel {

  private _id: string;
  private _name: string;
  private _email: string;
  private _mobile?: string;
  
  constructor(params: UserParam) {
    this._id = params.id;
    this._name = params.name;
    this._email = params.email;
    this._mobile = params.mobile;
  }

  get id(){ return this._id };
  get name(){ return this._name };
  get email(){ return this._email };
  get mobile(){ return this._mobile };
}