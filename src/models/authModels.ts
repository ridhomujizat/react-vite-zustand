export type RoleAuth = 'SuperAdmin' | 'Staff Repair and Maintenance';
export interface PostLogin {
  email: string;
  password: string;
}

export interface Login {
  user: User;
  role: Role;
  accessToken: string;
  expiredAt: Date;
  refreshToken: string;
}

export interface Role {
  id: number;
  name: RoleAuth;
  deletedAt: null;
  deletedBy: null;
}

export interface User {
  id: string;
  email: string;
  phone: string;
  imageUrl: string;
  roleId: number;
  status: null;
  deletedAt: null;
  deletedBy: null;
  UserInformation: UserInformation;
}

export interface UserInformation {
  id: number;
  userId: string;
  fullName: string;
  address: null;
  employeeId: null;
  npwpNumber: null;
  gender: string;
  placeOfBirth: null;
  birthDate: null;
  maritalStatus: null;
  religion: null;
  createdAt: Date;
  updatedAt: Date;
}
