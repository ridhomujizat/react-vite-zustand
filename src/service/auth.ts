import http from 'utils/request';
import { Respons, PostLogin, Login } from 'models';
// import { RoleAccessParams } from "models/RoleAccess";
// import { CreateRoleUserPayload } from "models/RoleUser";

export const postLogin = (payload: PostLogin) =>
  new Promise<Respons<Login>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/auth/login`, payload);
      if (respon.data) {
        resolve(respon.data);
      }
    } catch (err: any) {
      const message: string = err.response
        ? `${err.response.data.message}`
        : 'Oops, something wrong with our server, please try again later.';
      reject(message);
    }
  });
