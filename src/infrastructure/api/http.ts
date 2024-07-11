import axios from 'axios';
import { isEmpty } from 'lodash';


const ServerURL = process.env.REACT_APP_API_URL;

type ObjType = {
  [key: string]: string|number
}
type ParamType = {
  data : ObjType|undefined,
  options?: ObjType|undefined
}

const http = axios.create({
  withCredentials : true
});

function dataToQuery(params: ObjType) {
  let query = "?";
  for (let itr in params) {
    query += `${itr}=${params[itr]}&`;
  }
  return query;
}

async function post(url:string, params?:ParamType) {
  try {
    const result = await http.post(`${ServerURL}/${url}`, params?.data, params?.options);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function get(url:string, params?:ParamType) {
  if (params?.data && !isEmpty(params?.data)) {
    url += dataToQuery(params?.data);
  }
  try {
    const result = await http.get(`${ServerURL}/${url}`, params?.options);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function put(url:string, params?:ParamType) {
  try {
    const result = await http.put(`${ServerURL}/${url}`, params?.data, params?.options);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function del(url:string, params?:ParamType) {
  if (params?.data && !isEmpty(params?.data)) {
    url += dataToQuery(params.data);
  }
  try {
    const result = await http.delete(`${ServerURL}/${url}`, params?.options);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}

const Http = {
  post,
  get,
  put,
  delete : del,
}

export default Http;