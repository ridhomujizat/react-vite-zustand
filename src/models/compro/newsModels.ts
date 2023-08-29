import { ParamsType } from 'models/fetchModels';

export interface ParamsNews extends ParamsType {
  categoryId?: number;
  arrayIdTags?: number;
  dateUpdated?: number;
}

export interface NewsTypes {
  id: number;
  title: string;
  content: string;
  slug: string;
  arrayIdTags: TagsTypes[];
  authorId: string;
  imageObjectName: string;
  metaDescription: string;
  status: boolean;
  totalLike: number;
  totalDislike: number;
  deletedAt: null;
  deletedBy: null;
  createdAt: Date;
  updatedAt: Date;
  categoryArticle: CategoryNewsTypes;
  imageUrl: string;
}

export interface CategoryNewsTypes {
  id: number;
  name: string;
  description?: string;
}
export interface CreateCategoryNewsTypes {
  name: string;
  description: string;
}

export interface CreateTagsNewsTypes {
  name: string;
  description: string;
}

export interface CreateNews {
  title: string;
  content: string;
  slug: string;
  imageObjectName: string;
  metaDescription: string;
  totalLike: number;
  totalDislike: number;
  categoryId: null | number | CategoryNewsTypes;
  arrayIdTags: number[] | string;
}

export interface TagsTypes {
  id: number;
  name: string;
  description?: string;
}
