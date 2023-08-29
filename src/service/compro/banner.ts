import http from 'utils/request';
import { BannerTypes, Respons, ListRespons, CreateBannerTypes } from 'models';

export const getBanners = () =>
  new Promise<ListRespons<BannerTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/banners`);
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

export const getBannerDetail = (id: string | number) =>
  new Promise<Respons<BannerTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/banners/${id}`);
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

export const createBanner = (Body: CreateBannerTypes) =>
  new Promise<Respons<BannerTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/banners/create`, Body);
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

export const updateBanner = (id: string | number, body: CreateBannerTypes) =>
  new Promise<Respons<BannerTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/banners/${id}`, body);
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

export const deleteBanner = (id: string | number) =>
  new Promise<Respons<BannerTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.delete(`/api/banners/${id}`);
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
