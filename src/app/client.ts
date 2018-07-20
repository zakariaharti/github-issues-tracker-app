import ApolloClient from 'apollo-boost';
import { API_KEY } from '../../apikey';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers:{
    Authorization: 'bearer '+API_KEY
  }
});
