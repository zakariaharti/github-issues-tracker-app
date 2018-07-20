import * as React from 'react';
import { match } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query, QueryResult } from 'react-apollo';
import {
  Container,
  Button,
  Dimmer,
  Loader,
  Segment
} from 'semantic-ui-react';
import { History } from 'history';

import { Repository as RepositoryInterface } from '../../utils/types';
import { Issue } from '../../utils/types';

import { Container as DivContainer  } from '../../common/Container';
import { ShowMoreButton } from '../../common/ShowMoreButton';
import { Navbar } from '../../common/Navbar';
import { RepositoryDetail } from './RepositoryDetail';
import { RepositoryHeader } from './RepositoryHeader';

interface RepositoryProps{
  match ?: match<{
    name: string,
    owner: string
  }>;
  history: History;
}

const GET_REPOSITORY_QUERY = gql`
   query($owner: String!,
         $name: String!,
         $orderByField: IssueOrderField!,
         $orderByDirection: OrderDirection!) {
       repository(owner: $owner, name: $name){
         stargazers{
           totalCount
         }
         forkCount
         watchers{
           totalCount
         }
         createdAt
         description
         hasIssuesEnabled
         homepageUrl
         url
         id
         name
         nameWithOwner
         owner{
           avatarUrl
           url
           login
         }
         primaryLanguage{
           id
           name
           color
         }
         issues(first: 70, orderBy: {
            field: $orderByField,
            direction: $orderByDirection
         }){
           totalCount
           nodes{
             repository{
               name
               owner{
                 login
               }
             }
             author{
               avatarUrl
               login
               url
             }
             bodyText
             closed
             createdAt
             id
             locked
             number
             publishedAt
             title
             url
             state
             comments{
               totalCount
            }
         }
       }
     }
  }
`;

interface DataQueryTypes{
  repository: RepositoryInterface
}

interface DataVariablesTypes{
  owner: string;
  name: string;
  orderByField: "COMMENT" | "CREATED_AT" | "UPDATED_AT";
  orderByDirection: "ASC" | "DESC";
}

interface StateType{
  readonly currentVisibleItems: number;
}

export class Repository extends React.Component<RepositoryProps,StateType>{

  state = {
    currentVisibleItems: 10
  }

  handleOnClick = (path: string) => {
    this.props.history.push(path);
  }

  render(){
    return(
      <Container>
        <Navbar />
        <Query
          query={GET_REPOSITORY_QUERY}
          variables={{
            name: this.props.match.params.name,
            owner: this.props.match.params.owner,
            orderByField: "CREATED_AT",
            orderByDirection: "DESC"
          }}
          >
          {(data: QueryResult<DataQueryTypes,DataVariablesTypes>) => {

            if(data.loading){
              return(
                <DivContainer>
                    <Loader active>Loading</Loader>
                </DivContainer>
              )
            }

            if(data.error){
              return(
                <DivContainer>
                  <p>an error occured while fething data</p>
                </DivContainer>
              )
            }

            return(
              <React.Fragment>
                <RepositoryHeader
                  {...data.data.repository}
                />
                <RepositoryDetail
                  onItemClick={this.handleOnClick}
                  currentVisibleItems={this.state.currentVisibleItems}
                  issues={data.data.repository.issues.nodes}
                />
                <ShowMoreButton
                  message="load more"
                  onClick={() => {
                    if(this.state.currentVisibleItems >= data.data.repository.issues.totalCount){
                      this.setState({
                        currentVisibleItems: data.data.repository.issues.totalCount
                      });
                    }else{
                      this.setState({
                        currentVisibleItems: this.state.currentVisibleItems += 10
                      });
                    }
                  }}
                />
              </React.Fragment>
            );
          }}
        </Query>
      </Container>
    )
  }
}
