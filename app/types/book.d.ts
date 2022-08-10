import { BuildOptions, Model } from "sequelize";

export interface BookAttributes {
  BookName: string;
  BookAuthor: string;
  Description: string;
}

export interface BookInstance extends Model<BookAttributes>, BookAttributes {}

export type BookStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BookInstance;
};
