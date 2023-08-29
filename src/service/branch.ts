import http from 'utils/request';
import { ListRespons, ParamsBranch, BranchTypes } from 'models';

export const getBranch = (payloadParams: ParamsBranch) =>
  new Promise<ListRespons<BranchTypes>>(async (resolve, reject) => {
    try {
      const { type, ...params } = payloadParams;
      let endpoint = '/api/branch-location';
      switch (type) {
        case 'internal':
          endpoint = '/api/branch-location/type/internal';
          break;
        case 'external':
          endpoint = '/api/branch-location/type/external';
          break;
        default:
          break;
      }
      const respon = await http.get(endpoint, { params });
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
