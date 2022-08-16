"use strict";

import { DataTypes, Sequelize } from "sequelize";
//import { UserStatic } from "../types";
import Book from "./book";
import db from ".";

const modelOPtions = {
  tableName: "Users",
};

const attributes = {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mark_as_signin: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING,
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

function userModelFactory(sequelize: Sequelize) {
  return sequelize.define("User", attributes, modelOPtions);
}

const User = userModelFactory(db);

User.hasMany(Book, { foreignKey: "userId", as: "book" });

export default User;
