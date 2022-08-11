import { Identifier } from "sequelize/types";
import Book from "../models/book";
import user from "../models/user";
import User from "../models/user";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controller";

async function add(attrs, userId: number) {
  //console.log("attrs-------------------------", attrs);
  // console.log("--------", id);
  attrs.userId = userId;
  // console.log(attrs)
  return Book.create(attrs);
}
async function list() {
  return Book.findAll();
}
async function edit(attrs: BookAttributes, bookId: number) {
  const data = Book.update(attrs, {
    where: {
      id: bookId,
    },
  });
}

async function erase(bookId: number) {
  return Book.destroy({
    where: {
      id: bookId,
    },
  });
}

export { add, edit, erase, list };
