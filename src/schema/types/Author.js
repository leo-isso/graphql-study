import { 
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { Post } from './Post'
import { fakeDatabase as database } from '../../FakeDatabase'

export const Author = GraphQLObjectType({
  name: "Author",
  description: "All details of an author on the Website",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },

    posts: {
      type: new GraphQLList(Post),
      resolve: (author) => database.getPostsOfAuthor(author.id)
    }
  })
})