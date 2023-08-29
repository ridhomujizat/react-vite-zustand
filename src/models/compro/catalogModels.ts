import { BrandTypes } from 'models';

export interface CatalogTypes {
  id: number;
  brandProductId: number;
  fileObjectName: string;
  status: boolean;
  deletedAt: null;
  createdBy: string;
  updatedBy: null;
  deletedBy: null;
  createdAt: Date;
  updatedAt: Date;
  fileUrl: string;
  detailBrand: BrandTypes;
}

export interface CreateCatalogTypes {
  brandProductId: number | string | null | BrandTypes;
  fileObjectName: string;
}
