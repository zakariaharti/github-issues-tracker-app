import * as React from 'react';
import * as moment from 'moment';
import {
  Image,
  Label,
  Icon
} from 'semantic-ui-react';
import styled from 'styled-components';

import { Issue  } from '../../utils/types';

const StyledContainer = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid #dcdcdc73;
  border-top: 2px solid #9183e1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &:after{
    content: "";
    clear: both;
    display: table;
  }
`;

const StyledHeader = styled.div`
  padding: 20px;

  &:after{
    content: "";
    clear: both;
    display: table;
  }
`;

const StyledAuthor = styled.div`
  float: left;

  a{
    color: #1d85d8;
    text-transform: capitalize;
    font-size: 1.1em;
  }

  p{
    color: gray;
  }
`;

const StyledState = styled.div`
  float: right;
`;

const StyledContent = styled.div`
  padding: 20px;

  p.title{
    color: #545454;
    font-size: 1.3em;
  }

  p.body{
    color: gray;
  }

`;

export const IssueDetail: React.SFC<Issue & {
  onIconClick : () => void
}> = (props) => {
  return(
    <StyledContainer>
      <div className="repo" style={{padding: '20px'}}>
        <Icon
          name="arrow left"
        style={{
          float: 'left',
          color: 'gray',
          cursor: 'pointer'
        }} />
        <a 
          onClick={props.onIconClick}
          style={{
          color: '#1d85da',
          fontSize: '1.1em',
          textTransform: 'capitalize',
          cursor: 'pointer'
        }}>{props.repository.name}</a>
      </div>
      <StyledHeader>
        <Image
          src={props.author.avatarUrl}
          size="small"
          style={
            {
              marginRight: '10px',
              float: 'left',
              borderRadius: '6px',
              height: '80px',
              width: '80px'
            }
          }
        />

        <StyledAuthor>
          <a href={props.author.url}>{props.author.login}</a>
          <p>
            <Icon name="calendar" /> {moment(props.createdAt, "YYYYMMDD").fromNow()}
          </p>
        </StyledAuthor>

        <StyledState>
          <Label color={props.closed ? 'red' : 'green'}>
            <Icon name="exclamation circle" /> {props.closed ? 'closed' : 'open'}
          </Label>
        </StyledState>
      </StyledHeader>

      <StyledContent>
        <p className="title">{props.title}</p>
        <p className="body">{props.bodyText}</p>
      </StyledContent>

    </StyledContainer>
  )
}
