"use strict";

import { DataTypes, Sequelize } from "sequelize";
//import { BookStatic } from "../types";
import db from ".";
import User from "./user";

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

Book.belongsTo(User, {
  foreignKey: "userId",
  as: "users",
});

export default Book;
