import { Identifier } from "sequelize/types";
import Book from "../models/book";
import user from "../models/user";
import User from "../models/user";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controller";

async function add(attrs, id: number) {
  //console.log("attrs-------------------------", attrs);
  // console.log("--------", id);
  attrs.userId = id;
  // console.log(attrs)
  return Book.create(attrs);
}
async function list() {
  return Book.findAll();
}
async function edit(attrs: BookAttributes, id: number) {
  const data = Book.update(attrs, {
    where: {
      id: id,
    },
  });
  console.log("---------------------------", data);
}

async function erase(id: number) {
  return Book.destroy({
    where: {
      id: id,
    },
  });
}

export { add, edit, erase, list };
