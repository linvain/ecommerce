import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const link = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  }),
  new HttpLink({
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
    credentials: 'same-origin'
  })
])

const cache = new InMemoryCache()

const resolvers = {
  Mutation: {
    changeLocation: (_, { to }, { client }) => {
      const data = { path: to }
      client.writeData({ data })
    }
  }
}

// https://www.apollographql.com/docs/react/advanced/boost-migration
export const client = new ApolloClient({
  link,
  cache,
  resolvers,
})

const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  return {
    id: m,
    name: `Product ${m}`,
    img: `https://dummyimage.com/150x150/fff/000&text=${m}`,
    __typename: 'Product'
  }
})

cache.writeData({
  data: {
    path: '/',
    products: fakeProducts,
  },
});
