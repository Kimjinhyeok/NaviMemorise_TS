import ValidationResult from "../validationResult";

export default class UserInputValidator {

  private UserInputValidated:{[key:string]:boolean} = {
    password : true,
    passwordRepeat : true,
    id : true,
    name : true,
    email : true,
    mobile : true,
  }
  constructor(
    private id:string,
    private email:string,
    private password:string,
    private passwordRepeat:string,
    private name:string,
    private mobile:string,
  ){ return this }

  test = ():ValidationResult => {
    try {
      if(!this.idTest()) {
        this.UserInputValidated.id = false;
      }
      if(!this.emailTest()) {
        this.UserInputValidated.email = false;
      }
      if(!this.mobileTest()) {
        this.UserInputValidated.mobile = false;
      }
      if(!this.passwordTest(this.password)) {
        this.UserInputValidated.password = false;
      }
      if(!this.passwordTest(this.passwordRepeat)) {
        this.UserInputValidated.passwordRepeat = false;
      }
      if(!this.passwordEqualTest()) {
        this.UserInputValidated.passwordRepeat = false;
      }
      if(!this.nameTest()) {
        this.UserInputValidated.name = false;
      }
    } catch (error) {
      Object.keys(this.UserInputValidated).forEach(key => {
        this.UserInputValidated[key] = false;
      }); //에러 발생시 전영역 에러처리
    } finally {
      return Object({isValid : this.getResult(), error: {...this.UserInputValidated}}); // copy result      
    }
  }

  private getResult = () => {
    return Object.keys(this.UserInputValidated)
                  .some(key => this.UserInputValidated[key] === true);
  }
  private idTest = () => {
    return this.id && this.id.trim().length > 0;
  }

  private emailTest = () => {
    return this.email 
    && this.email.trim().length > 0 
    && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
  }

  private passwordTest = (password = "") => {
    return password && password.trim().length > 4;
  }

  private passwordEqualTest = () => {
    return this.password === this.passwordRepeat
  }

  private nameTest = () => {
    return this.name && this.name.trim().length > 1;
  }

  private mobileTest = () => {
    return this.mobile && /^\d{3}-\d{3,4}-\d{4}$/.test(this.mobile);
  }
}