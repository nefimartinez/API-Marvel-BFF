"use strict";

const mongoose = require("mongoose");
const { db } = require("../config/global");

const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb:${db}/heroes`, {
      useNewUrlParser: true,
    });
    console.log("DB Mongo Online");
  } catch (error) {
    throw new Error("Error al iniciar DB: ", error);
  }
};

module.exports = {
  dbConnection,
};
