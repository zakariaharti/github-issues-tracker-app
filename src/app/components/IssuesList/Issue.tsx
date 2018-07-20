import * as React from 'react';
import {
  Image,
  Icon,
  Label
} from 'semantic-ui-react';
import * as moment from 'moment';
import styled from 'styled-components';

import { Issue as IssueInterface } from '../../utils/types';

const StyledContainer = styled.div`
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc73;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-left: 2px solid #f8fafb;
  cursor: pointer;
  transition: .2s;
  background: rgba(205, 238, 253, 0.1411764705882353);

  &:hover{
    border-left: 2px solid #A291FB;
    background: white;
  }

  &:after{
    content: "";
    display: table;
    clear: both;
  }
`;

const StyledDivAuthor = styled.div`
  float: left;
`;

const StyledDivIssueState = styled.div`
  float: right;
`;

const StyledTitle = styled.div`
  float: left;

  a.title{
    color: #1d85d8;
    font-size: 1.1em;
  }

  p.desc{
    color: gray;
  }

  .author-info{
    display: flex;

    p:first-child{
      margin-left: 0;
    }

    p{
      margin: 0 10px;
      font-size: .8em;
      color: #b3b3b3;
    }
  }
`;

interface IssueType extends IssueInterface{
  onItemClick: (path: string) => void;
}

export class Issue extends React.Component<IssueType> {

  handleOnClick = () => {
    this.props.onItemClick(`/issue/${this.props.repository.owner.login}/${this.props.repository.name}/number/${this.props.number}`)
  }

  render(){
    return(
      <StyledContainer onClick={this.handleOnClick}>
        <StyledDivAuthor>
          <Image
            src={this.props.author.avatarUrl ? this.props.author.avatarUrl : ''}
            size="mini"
            style={{
              float: 'left',
              height: '70px',
              width: '70px',
              borderRadius: '6px',
              marginRight: '10px'
            }}
          />
          <StyledTitle>
            <a className="title">
              {this.props.title ? this.props.title.slice(0,100) : this.props.title}
            </a>
            <p className="desc">{this.props.bodyText ? this.props.bodyText.slice(0,100)+'...' : this.props.bodyText}</p>
            <div className="author-info">
              <p>
                <Icon name="user" /> {this.props.author.login}
              </p>
              <p>
                <Icon name="comment" /> {this.props.comments.totalCount}
              </p>
              <p>
                <Icon name="calendar" /> {moment(this.props.createdAt, "YYYYMMDD").fromNow()}
              </p>
            </div>
          </StyledTitle>
        </StyledDivAuthor>
        <StyledDivIssueState>
          <Label.Group>
            <Label color={this.props.closed ? 'red' : 'green'}>
              <Icon name="exclamation circle" /> {this.props.closed ? 'closed' : 'open'}
            </Label>
          </Label.Group>
        </StyledDivIssueState>
      </StyledContainer>
    )
  }
}
