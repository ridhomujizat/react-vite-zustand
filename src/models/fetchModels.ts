export interface Respons<T> {
  statusCode: string;
  message: string;
  success: boolean;
  data: T;
}

export interface ListRespons<T> {
  statusCode: string;
  message: string;
  success: boolean;
  data: {
    items: T[];
    page?: number;
    perPage?: number;
    totalData?: number;
    totalPages?: number;
  };
}

export interface ParamsType {
  page: number;
  perPage: number;
  search?: string;
}
