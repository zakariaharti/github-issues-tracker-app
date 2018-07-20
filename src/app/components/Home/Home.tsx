import * as React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { Query, QueryResult, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { ApolloClient  } from 'apollo-boost';
import { History } from 'history';

import { ShowMoreButton } from '../../common/ShowMoreButton';
import { Navbar } from '../../common/Navbar';
import { Repository } from '../Repository/Repository';
import { HomeHeader } from './HomeHeader';
import { HomeBody } from './HomeBody';
import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';
import { Repository as RepositoryInterface } from '../../utils/types';
import { ResultNotFound } from '../../common/ResultNotFound';


import "../../../assets/imgs/react.png";

const SEARCH_GRAPHQL_QUERY = gql`
   query($query: String!) {
     search(query: $query, type: REPOSITORY,first: 100){
       nodes{
         ...on Repository{
            stargazers{
              totalCount
            }
            watchers{
              totalCount
            }
            createdAt
            description
            forkCount
            hasIssuesEnabled
            homepageUrl
            id
            name
            nameWithOwner
            owner{
              avatarUrl
              login
              id
              url
            }
            primaryLanguage{
              id
              name
              color
            }
            url
          }
      }
    }
  }
`;

const resultMock = [
  {
    issues: {
      totalCount: 1,
      nodes: [
        {
          author: {
            avatarUrl: '',
            login: 'laravel',
            url: 'example.me'
          },
          body: '',
          bodyText: '',
          closed: false,
          createdAt: Date.now(),
          id: 'ml',
          locked: false,
          number: 10,
          publishedAt: Date.now(),
          title: 'this repo is awesome that It make me feel pain in my stomack',
          url: 'ex.me',
        }
      ]
    },
    stargazers: {
      totalCount: 200
    },
    watchers: {
      totalCount: 120
    },
    createdAt: Date.now(),
    description: 'this repo is awesome that It make me feel pain in my stomack',
    forkCount: 23,
    hasIssuesEnabled: true,
    homepageUrl: '',
    id: 'ml',
    name: 'react',
    nameWithOwner: 'facebook/react',
    owner: {
      avatarUrl: 'imgs/react.png',
      login: 'laravel',
      url: 'example.me'
    },
    primaryLangauge:{
      id: '',
      name: '',
      color: '',
    },
    url: ''
  }
];

interface HomePropsType{
  history: History;
}

interface HomeStateType{
  readonly query: string;
  readonly results: ReadonlyArray<RepositoryInterface[]> | any[];
  readonly loading: boolean;
  readonly errors: any;
  readonly currentVisibleItems: number;
}

interface DataQueryType{
  search:{
    nodes: RepositoryInterface[]
  }
}

interface DataVariablesType{
  query: string;
}

export class Home extends React.Component<HomePropsType,HomeStateType>{

  state = {
    query: '',
    results: resultMock,
    currentVisibleItems: 10,
    loading: false,
    errors: false
  }

  handleInputChange = (query: string) => {
    this.setState({query});
  }

  handleFetchResult = async (client: ApolloClient<any>) => {

    const data = await client.query<DataQueryType>({
      query: SEARCH_GRAPHQL_QUERY,
      variables: { query: this.state.query },
      errorPolicy: 'all'
    });

    this.setState({
      results: data.data.search.nodes,
      loading: data.loading,
      errors: data.errors
    });
  }

  handleShowMoreResults = () => {
    if(this.state.currentVisibleItems >= this.state.results.length){
      this.setState({
        currentVisibleItems: this.state.results.length
      });
    }else{
      this.setState({
        currentVisibleItems: this.state.currentVisibleItems += 10
      });
    }
  }

  handleItemClick = (path: string) => {
    this.props.history.push(path);
  }

  render(){
    return(
        <Container>
          <Navbar />
          <HomeHeader>
            <ApolloConsumer>
              {(client) => {
                return(
                  <SearchForm
                    searchQuery={this.state.query}
                    onSearchChange={
                      (query) => {
                        this.handleInputChange(query);

                        this.handleFetchResult(client);
                      }
                    }
                  />
                )
              }}
            </ApolloConsumer>
          </HomeHeader>
          <HomeBody>
            {
              this.state.results.length < 2 ?
              <ResultNotFound message="no repository found" /> :

              <React.Fragment>
                <SearchResult
                  onItemClick={this.handleItemClick}
                  isNotFound={false}
                  results={this.state.results}
                  currentVisibleItems={this.state.currentVisibleItems}
                />
                <ShowMoreButton
                  message="load more"
                  onClick={this.handleShowMoreResults}
                />
              </React.Fragment>
            }
          </HomeBody>
        </Container>
      )
  }
}
