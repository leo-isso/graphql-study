import { 
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
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