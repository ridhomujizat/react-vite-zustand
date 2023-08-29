import http from 'utils/request';
import { ListRespons, ParamsType, BrandTypes } from 'models';

export const getBrand = (params?: ParamsType) =>
  new Promise<ListRespons<BrandTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/brands`, { params });
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
