import http from 'utils/request';
import { UploadFileResponsType, Respons } from 'models';

export const UploadFIleService = (body: FormData) =>
  new Promise<Respons<UploadFileResponsType>>(async (resolve, reject) => {
    try {
      const respon = await http.post(`/api/upload`, body);
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
