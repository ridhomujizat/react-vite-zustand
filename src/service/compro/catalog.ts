import http from 'utils/request';
import { Respons, ListRespons, CatalogTypes, CreateCatalogTypes } from 'models';

export const getCatalog = () =>
  new Promise<ListRespons<CatalogTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/brand-pricelist`);
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

export const getCatalogDetail = (id: string | number) =>
  new Promise<Respons<CatalogTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/brand-pricelist/${id}`);
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

export const createCatalog = (Body: CreateCatalogTypes) =>
  new Promise<Respons<CatalogTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/brand-pricelist/create`, Body);
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

export const updateCatalog = (id: string | number, body: CreateCatalogTypes) =>
  new Promise<Respons<CatalogTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/brand-pricelist/${id}`, body);
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

export const deleteCatalog = (id: string | number) =>
  new Promise<Respons<CatalogTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.delete(`/api/articles/${id}`);
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
