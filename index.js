const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const http = require("http");
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
// use Parser Middleware
app.use(express.json());

// use Logger middleware
app.use(function (req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  return next();
});

// use param middleware
app.param("collectionName", function (req, res, next, collectionName) {
  req.collection = db.collection(collectionName);
  return next();
});
