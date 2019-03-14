'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Post = require('../types/Post');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
  addPost: {
    type: _Post.Post,
    description: "Post a new Blog Post",
    args: {
      post: { type: _Post.PostInputType }
    },
    resolve: function resolve(parent, _ref) {
      var post = _ref.post;

      return _FakeDatabase.fakeDatabase.addNewBlogPost(post);
    }
  }
};