import http from 'utils/request';
import { ListRespons, CityTypes, ParamsType, ProvincesTypes } from 'models';

export const getLocationCity = (params?: ParamsType) =>
  new Promise<ListRespons<CityTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/cities`, { params });
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

export const getLocationProv = (params?: ParamsType) =>
  new Promise<ListRespons<ProvincesTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/provinces`, {
        params: { ...params, countryId: 102 },
      });
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
