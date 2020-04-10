const axios = require("axios");

const getAllArticles = () => {
  return axios
    .get("https://nc-news-be-project.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    });
};

module.exports = { getAllArticles };
