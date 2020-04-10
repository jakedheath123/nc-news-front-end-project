const axios = require("axios");

const getAllArticles = () => {
  return axios
    .get("https://nc-news-be-project.herokuapp.com/api/articles")
    .then(({ data }) => {
      console.log(data);
    });
};

module.exports = { getAllArticles };
