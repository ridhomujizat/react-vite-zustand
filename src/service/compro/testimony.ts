import http from 'utils/request';
import {
  Respons,
  ListRespons,
  TestimonyTypes,
  CreateTestimonyTypes,
} from 'models';

export const getTestimonys = () =>
  new Promise<ListRespons<TestimonyTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/testimonies`);
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

export const getTestimonyDetail = (id: string | number) =>
  new Promise<Respons<TestimonyTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/testimonies/${id}`);
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

export const createTestimony = (Body: CreateTestimonyTypes) =>
  new Promise<Respons<TestimonyTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/testimonies/create`, Body);
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

export const updateTestimony = (
  id: string | number,
  body: CreateTestimonyTypes,
) =>
  new Promise<Respons<TestimonyTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/testimonies/${id}`, body);
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

export const deleteTestimony = (id: string | number) =>
  new Promise<Respons<TestimonyTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.delete(`/api/testimonies/${id}`);
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
