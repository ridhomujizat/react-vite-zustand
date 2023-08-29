import { ParamsType, CityTypes, BrandTypes, ProvincesTypes } from 'models';

export interface ParamsBranch extends ParamsType {
  type: 'internal' | 'external' | null;
}

export interface BranchTypes {
  id: number;
  brandProductId: number;
  name: string;
  address: string;
  cityId: number;
  imageObjectName: string;
  phone: null;
  phoneWhatsapp: string;
  tokopediaUrl: string;
  instagramUrl: string;
  provinceId: number;
  facebookUrl: string;
  websiteUrl: string;
  isCentralBranch: boolean;
  isInternalBranch: boolean;
  status: boolean;
  openingTime: string;
  closingTime: string;
  latitude: null;
  longitude: null;
  createdBy: string;
  updatedBy: string;
  deletedBy: null;
  deletedAt: null;
  createdAt: Date;
  updatedAt: Date;
  detailCity: CityTypes;
  detailProvince: ProvincesTypes;
  imageUrl: string;
  detailBrand: BrandTypes;
}
