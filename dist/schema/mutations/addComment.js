'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Comment = require('../types/Comment');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
  addComment: {
    type: Post,
    description: "Post a new Comment for a Blog Post",
    args: {
      comment: { type: _Comment.CommentInputType }
    },
    resolve: function resolve(parent, _ref) {
      var comment = _ref.comment;

      return _FakeDatabase.fakeDatabase.addNewComment(comment);
    }
  }
};