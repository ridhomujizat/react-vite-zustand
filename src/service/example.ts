import http from "utils/request";
// import { RoleAccessParams } from "models/RoleAccess";
// import { CreateRoleUserPayload } from "models/RoleUser";

// export const getAllAdministratorRole = (params: RoleAccessParams) =>
//   new Promise<RoleAccessParams>(async (resolve, reject) => {
//     try {
//       const respon = await http.get(`administrator/role`, {
//         params,
//       });
//       if (respon.data) {
//         resolve(respon.data);
//       }
//     } catch (err: any) {
//       const message: string = err.response
//         ? `${err.response.data.message}`
//         : "Oops, something wrong with our server, please try again later.";
//       reject(message);
//     }
//   });
