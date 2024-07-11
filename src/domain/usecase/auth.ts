import AuthRepository from "../../infrastructure/api/auth";

export default class AuthUsecase {

  constructor(
    private authRepository: AuthRepository
  ){}

  async signIn(id = "", password = "") {
    try {
      const res = await this.authRepository.signIn({id, password});

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async signUp(
    id = "",
    password = "",
    passwordRepeat = "",
    name = "",
    mobile = "",
    email = "",
  ) {
    try {
      const res = await this.authRepository.signUp({
        id, password, passwordRepeat, 
        name, mobile, email,
      });

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async signOut() {
    try {
      const res = await this.authRepository.signOut();

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async leave() {
    try {
      const res = await this.authRepository.leave();

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async checkPassword(password = "") {
    try {

      const data = { password };
      const res = await this.authRepository.checkPassword(data);

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async changePassword(password = "") {
    try {
      const data = { password };
      const res = await this.authRepository.changePassword(data);

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async reqEmail(email = "") {
    try {
      const data = { email };
      const res = await this.authRepository.reqEmail(data);

      return res;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}