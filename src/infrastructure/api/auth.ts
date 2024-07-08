import Http from './http';

const RootPath = 'auth';
const Paths = {
  signin : RootPath,
  signUp : `${RootPath}/signup`,
  signout : RootPath,
  leave : `${RootPath}/leave`,
  checkPassword : `${RootPath}/checkPwd`,
  changePassword : `${RootPath}/reset`,
  reqEmail : `${RootPath}/sendEmail`
}

export default class AuthRepository {

  async signIn(data:{}) {
    try {
      const params = { data: data, };
      const res = await Http.post(Paths.signin, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }

  async signUp(data:{}) {
    try {
      const params = { data: data, };
      const res = await Http.post(Paths.signUp, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      const params = { data: {}, };
      const res = await Http.post(Paths.signout, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }

  async leave() {
    try {
      const params = { data: {}, };
      const res = await Http.post(Paths.leave, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }

  async checkPassword(data:{}) {
    try {
      const params = { data: data, };
      const res = await Http.post(Paths.checkPassword, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }
  
  async changePassword(data:{}) {
    try {
      const params = { data: data, };
      const res = await Http.post(Paths.changePassword, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }

  async reqEmail(data:{}) {
    try {
      const params = { data: data, };
      const res = await Http.post(Paths.reqEmail, params);

      return res.data
    } catch (error) {
      throw error;
    }
  }
}