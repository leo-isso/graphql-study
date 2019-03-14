import {GraphQLList} from 'graphql';
import {Post} from '../types/Post';
import {fakeDatabase as database} from '../../FakeDatabase';

export default {
  posts: {
    type: new GraphQLList(Post),
    description: "Get a list of recent Blog Posts",
    args: {},
    resolve: function() {
      return database.getBlogPosts();
    }
  }
}