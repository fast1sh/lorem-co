import axios from "axios";

const _baseUrl = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments';

export default {
  getAllComments(cb) {
    axios.get(_baseUrl)
      .then(({ data }) => cb(data));
  },

  getComment(id, cb) {
    axios.get(`${_baseUrl}/${id}`)
      .then(({ data }) => cb(data));
  },

  addComment(comment, cb) {
    axios.post(_baseUrl, {
      "created_at": comment.created_at,
      "title": comment.title,
      "body": comment.body
    })
      .then(({ data }) => cb(data));
  },

  updateComment(id, newComment, cb) {
    axios.put(`${_baseUrl}/${id}`, {
      "created_at": newComment.created_at,
      "title": newComment.title,
      "body": newComment.body
    })
    .then(({ data }) => cb(data));
  },

  deleteComment(id, cb) {
    axios.delete(`${_baseUrl}/${id}`).then(({ data }) => cb(data));
  }
}