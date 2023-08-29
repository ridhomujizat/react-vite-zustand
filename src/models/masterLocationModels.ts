export interface ProvincesTypes {
  id: number;
  countryId: number;
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CityTypes {
  id: number;
  provinceId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
