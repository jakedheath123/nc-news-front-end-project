const axios = require("axios");

const request = axios.create({
  baseURL: "https://nc-news-be-project.herokuapp.com/api"
});

const getAllArticles = () => {
  return request.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

const getArticleByAuthor = author => {
  return request
    .get(`/articles?author=${author}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

module.exports = { getAllArticles, getArticleByAuthor };
