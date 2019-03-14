import { 
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const Author = GraphQLObjectType({
  name: "Author",
  description: "All details of an author on the Website",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})