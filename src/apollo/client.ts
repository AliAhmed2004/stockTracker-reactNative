import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wojiao.us-east-a.ibm.stepzen.net/api/eponymous-dachshund/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Apikey wojiao::local.net+1000::cd61ae1ddb509b54c712ff630a8bad22a5047bf600578fa1d575a021d3c573b1",
  },
});

export default client;
