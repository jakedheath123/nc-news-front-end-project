const axios = require("axios");

const request = axios.create({
  baseURL: "https://nc-news-be-project.herokuapp.com/api"
});

const getAllArticles = topic => {
  return request
    .get("/articles", {
      params: {
        topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getAllTopics = () => {
  return request.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

const getArticleByAuthor = author => {
  return request
    .get(`/articles?author=${author}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

const getSingleArticle = article_id => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

const getSingleArticleComments = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    console.log(data);
  });
};

module.exports = {
  getAllArticles,
  getArticleByAuthor,
  getSingleArticle,
  getSingleArticleComments,
  getAllTopics
};
