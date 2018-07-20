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
import { Navbar } from '../../common/Navbar';
import { RepositoryDetail } from './RepositoryDetail';
import { RepositoryHeader } from './RepositoryHeader';
import { IssueDetail } from '../IssuesList/IssueDetail';

interface RepositoryProps{
  match ?: match<{
    name: string,
    owner: string,
    number: number
  }>;
  history ?: History;
}

const GET_REPOSITORY_QUERY = gql`
    query($owner: String!,$name: String!,$number: Int!) {
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
         issue(number: $number){
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
           bodyHTML
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
`;

interface DataQueryTypes{
  repository: RepositoryInterface
}

interface DataVariablesTypes{
  owner: string;
  name: string;
  number: number;
}

export class RepositoryIssueDetail extends React.Component<RepositoryProps>{

  /*componentDidUpdate(prevProps: RepositoryProps){
    if(this.props.match.url != prevProps.match.url){
      this.props.match.url = prevProps.match.url;
    }
  }*/

  handleItemClick = () => {
    this.props.history.goBack();
  }

  render(){

    const issueNumber = this.props.match.params.number as number;

    return(
      <Container>
        <Navbar />
        <Query
          query={GET_REPOSITORY_QUERY}
          variables={{
            owner: this.props.match.params.owner,
            name: this.props.match.params.name,
            number: issueNumber
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
                <IssueDetail
                  onIconClick={this.handleItemClick}
                  {...data.data.repository.issue}
                />
              </React.Fragment>
            );
          }}
        </Query>
      </Container>
    )
  }
}
