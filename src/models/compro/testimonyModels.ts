export interface TestimonyTypes {
  id: number;
  name: string;
  imageObjectName: string;
  title: string;
  content: string;
  rating: number;
  occupation: string;
  logoObjectName: string;
  status: boolean;
  deletedAt: null;
  createdBy: string;
  deletedBy: null;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string;
  logoUrl: string;
}

export interface CreateTestimonyTypes {
  name: string;
  imageObjectName: string;
  title: string;
  content: string;
  rating: number;
  occupation: string;
  logoObjectName: string;
}
