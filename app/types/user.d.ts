import { BuildOptions, Model } from "sequelize";

export interface UserAttributes {
  Name: string;
  Email: string;
  Role: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};
