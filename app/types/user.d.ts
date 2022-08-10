import { BuildOptions, Model } from "sequelize";

export interface UserAttributes {
  Name: string;
  Email: string;
  Role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};
