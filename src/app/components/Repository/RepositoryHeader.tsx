import * as React from 'react';
import {
  Image,
  Label,
  Icon,
  Form,
  Dropdown
} from 'semantic-ui-react';
import styled from 'styled-components';

import { Repository } from '../../utils/types';

const StyledRepoHeader = styled.div`
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

const StyledRepoInfo = styled.div`
  float: left;

  img{
    width: 100px;
    height: 100px;
    float: left;
  }

`;

const StyledAvatarInfo = styled.div`
   float: left;
   margin: 0 20px;

   a.ownerWithName{
     color: #1d85d8;
     text-transform: capitalize;
     font-size: 1.1em;
   }

   span{
     color: #969696;
     font-size: 1.1em;
     margin: 0 3px;
   }

   a.name{
     color: #1d85d8;
     text-transform: capitalize;
     font-size: 1.1em;
   }

   p{
     color: gray;
   }
`;

const StyledRepoHint = styled.div`
   float: right;
   width: auto;
   margin: 0px 20px;
`;

const StyledIssuesControl = styled.div`
   background: white;
   border: 1px solid #dcdcdc73;
   border-top: 0;
   padding: 20px 20px;
   padding-bottom: 10px;
`;

interface RepositoryHeaderProps extends Repository{
}

export class RepositoryHeader extends React.Component<RepositoryHeaderProps> {
  render(){
    return(
      <React.Fragment>
      <StyledRepoHeader>
        <StyledRepoInfo>
          <Image src={this.props.owner.avatarUrl} size="small" />
          <StyledAvatarInfo>
            <a href={this.props.url} className="ownerWithName">{this.props.owner.login}</a>
            <span> > </span>
            <a href={this.props.url} className="name">{this.props.name}</a>
            <p>{this.props.description}</p>
            <Label.Group>
              <Label color="green">
                <Icon name="star" /> {this.props.stargazers.totalCount}
              </Label>
              <Label>
                <Icon name="eye" /> {this.props.watchers.totalCount}
              </Label>
              <Label>
                <Icon name="fork" /> {this.props.forkCount}
              </Label>
            </Label.Group>
          </StyledAvatarInfo>
        </StyledRepoInfo>
        <StyledRepoHint>
          <div>
            <Label color="orange">
              <Icon name="exclamation circle" /> {this.props.issues.totalCount} issues
            </Label>
          </div>
        </StyledRepoHint>
      </StyledRepoHeader>
    </React.Fragment>
    );
  }
}
