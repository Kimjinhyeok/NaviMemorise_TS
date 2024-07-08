import axios from 'axios';
import { isEmpty } from 'lodash';


const ServerURL = process.env.REACT_APP_API_URL;

type ObjType = {
  [key: string]: string|number
}
type ParamType = {
  data : ObjType,
  options?: ObjType|null
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

async function post(url = "", params:ParamType) {
  const { data, options } = params;
  try {
    const result = await http.post(`${ServerURL}/${url}`, data, options ?? {});
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function get(url = "", params:ParamType) {
  const { data, options } = params;
  if (!isEmpty(data)) {
    url += dataToQuery(data);
  }
  try {
    const result = await http.get(`${ServerURL}/${url}`, options ?? {});
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function put(url = "", params:ParamType) {
  const { data, options } = params;
  try {
    const result = await http.put(`${ServerURL}/${url}`, data ?? {}, options ?? {});
    if (result instanceof Error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}
async function del(url = "", params:ParamType) {
  const { data, options } = params;
  if (!isEmpty(data)) {
    url += dataToQuery(data);
  }
  try {
    const result = await http.delete(`${ServerURL}/${url}`, options ?? {});
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