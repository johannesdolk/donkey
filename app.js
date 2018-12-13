"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, ()=> {
  console.log("listening");
});

app.get("/", (req,res, next) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
})