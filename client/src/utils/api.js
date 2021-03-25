import axios from "axios";
// import express from "express";
import React, { Component } from "react";
const getSearchedBooks = async (search = "red") => {
  return await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      search +
      "&key=" +
      "AIzaSyAmukOX6JHM53iVJC7RJzMP-lGFQSiJ618" +
      "&maxResults=40"
  );
};

const deleteDbBook = async (id) => {
  return await axios.delete("/api/books/" + id);
};
const saveDbBook = async (book) => {
  return await axios.post("http://localhost:8080/api/books", book);
};

const getAllBooks = async () => {
  return await axios.get("http://localhost:8080/api/books");
};

//eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSearchedBooks: getSearchedBooks,
  deleteDbBook: deleteDbBook,
  saveDbBook: saveDbBook,
  getAllBooks: getAllBooks,
};