"use strict";

import { DataTypes, Sequelize } from "sequelize";
//import { BookStatic } from "../types";
import User from "./user";
import db from ".";

const modelOPtions = {
  tableName: "Books",
};

const attributes = {
  BookName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BookAuthor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references: {
      model: "Users",
      key: "id",
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

function bookModelFactory(sequelize: Sequelize) {
  return sequelize.define("Book", attributes, modelOPtions);
}

const Book = bookModelFactory(db);

export default Book;
