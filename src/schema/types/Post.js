import { 
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { Author } from './Author'
import { Comment } from './Comment'
import { fakeDatabase as database } from '../../FakeDatabase'

export const Comment = GraphQLObjectType({
  name: "Post",
  description: "Details of the Blog Post",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },

    author: { 
      type: Author,
      resolve: (post) => database.getAuthor(post.author)
    },

    comment: {
      type: new GraphQLList(Comment),
      resolve: (post) => database.getCommentsForPost(post.id)
    }

  })
})