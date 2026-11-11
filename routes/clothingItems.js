const router = require("express").Router();

const {
  createItem,
  getItems,
  deleteItem,
  addLike,
  deleteLike,
} = require("../controllers/clothingItems.js");
