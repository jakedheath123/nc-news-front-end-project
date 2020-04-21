import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-be-project.herokuapp.com/api"
});

export const getAllArticles = (topic, author, sort_by) => {
  return request
    .get("/articles", {
      params: {
        topic,
        author,
        sort_by
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getAllTopics = () => {
  return request.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const getSingleArticle = article_id => {
  return request
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getSingleArticleComments = article_id => {
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, comment) => {
  return request
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteArticleComment = comment_id => {
  return request.delete(`/comments/${comment_id}`).then(response => {
    return response;
  });
};

export const patchVotes = (inc_votes, id, type) => {
  return request
    .patch(`/${type}/${id}`, {
      inc_votes
    })
    .then(({ data }) => {
      return data;
    });
};
