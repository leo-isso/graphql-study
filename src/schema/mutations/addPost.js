import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Post, PostInputType} from '../types/Post';
import {fakeDatabase as database} from '../../FakeDatabase';

export default {
  addPost: {
    type: Post,
    description: "Post a new Blog Post",
    args: {
      post: { type: PostInputType }
    },
    resolve: function(parent, {post}) {
      return database.addNewBlogPost(post);
    }
  }
}