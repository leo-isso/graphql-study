import { 
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';

import addPost from './mutations/addPost'
import addComment from './mutations/addPost'


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
      ...posts,
      ...post,
      ...author
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
      ...addComment,
      ...addPost
    })
  })
})

export default schema;