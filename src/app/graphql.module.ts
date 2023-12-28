import { APOLLO_NAMED_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';

// add the URL of the GraphQL server here
const clients = {
  github: "github/graphql",
  leetcode: "leetcode/graphql/"
}; 

export function createApollo(httpLink: HttpLink): NamedOptions {
  return {
    github: {
      link: httpLink.create({ uri: clients.github }),
      cache: new InMemoryCache()
    },
    leetcode: {
      link: httpLink.create({ uri: clients.leetcode }),
      cache: new InMemoryCache()
    }
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
