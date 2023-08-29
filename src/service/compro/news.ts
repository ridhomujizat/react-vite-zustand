import http from 'utils/request';
import {
  ParamsNews,
  ParamsType,
  Respons,
  NewsTypes,
  ListRespons,
  CreateNews,
  CreateCategoryNewsTypes,
  TagsTypes,
  CreateTagsNewsTypes,
} from 'models';

// NEWS ========================

export const getNews = (params: ParamsNews) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/articles`, { params });
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

export const getNewsDetail = (id: string | number) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/articles/detail/${id}`);
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

export const createNews = (Body: CreateNews) =>
  new Promise<Respons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/articles/create`, Body);
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

export const updateNews = (id: string | number, body: CreateNews) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/articles/${id}`, body);
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

export const deleteNews = (id: string | number) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
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

// Category ========================

export const getCategoryNews = (params: ParamsType) =>
  new Promise<ParamsNews>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/category-articles`, { params });
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

export const getNewsCategoryDetail = (id: string | number) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/category-articles/${id}`);
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

export const createCategoryNews = (Body: CreateCategoryNewsTypes) =>
  new Promise<Respons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/category-articles/create`, Body);
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

export const updateCategoryNews = (
  id: string | number,
  body: CreateCategoryNewsTypes,
) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/category-articles/${id}`, body);
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

export const deleteCategoryNews = (id: string | number) =>
  new Promise<ListRespons<NewsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.delete(`/api/category-articles/${id}`);
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

// Tags ========================
export const getTagNews = (params: ParamsType) =>
  new Promise<ParamsNews>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/tag-articles`, { params });
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

export const getNewsTagsDetail = (id: string | number) =>
  new Promise<Respons<TagsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.get(`/api/tag-articles/${id}`);
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

export const createTagNews = (Body: CreateTagsNewsTypes) =>
  new Promise<Respons<TagsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/tag-articles/create`, Body);
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

export const updateTagNews = (id: string | number, body: CreateTagsNewsTypes) =>
  new Promise<Respons<TagsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.put(`/api/tag-articles/${id}`, body);
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

export const deleteTagNews = (id: string | number) =>
  new Promise<Respons<TagsTypes>>(async (resolve, reject) => {
    try {
      const respon = await http.delete(`/api/tag-articles/${id}`);
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
