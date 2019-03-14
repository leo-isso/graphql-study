import { 
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

export const Comment = GraphQLObjectType({
  name: "Comment",
  description: "Details of the comment",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
})

export const CommentInputType = new GraphQLInputObjectType({
  name: "CommentInput",
  fields: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    postId: {type: new GraphQLNonNull(GraphQLInt)},
  }
})