import * as React from 'react';
import {
  Image,
  Label,
  Icon
} from 'semantic-ui-react';
import styled from 'styled-components';

const StyledResultItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e4e4e4;
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

const StyledAvatar = styled.div`
  float: left;
`;

const StyledRepoName = styled.div`
  float: left;
  margin: 0px 20px;

  a{
    color: #2196F3;
    text-transform: capitalize;
    font-size: 1.1em;
  }

  .description{
    p{
      color: gray;
    }
  }
`;

const StyledDivFloatedRight = styled.div`
  float: right;
`;

interface ListViewItemProps{
  ownerWithName: string;
  avatarUrl: string;
  name: string;
  description: string;
  stargazersCount: number;
  forkCount: number;
  onItemClick: (path: string) => void;
}

export class ListViewItem extends React.Component<ListViewItemProps>{

  handleOnClick = () => {
    this.props.onItemClick('/repo/'+this.props.ownerWithName);
  }

  render(){
    return(
      <StyledResultItem onClick={this.handleOnClick}>
          <StyledAvatar>
            <Image src={this.props.avatarUrl} width="50px" height="50px" />
          </StyledAvatar>
          <StyledRepoName>
            <a>{this.props.name}</a>
            <div className="description">
              <p>{ this.props.description }</p>
            </div>
          </StyledRepoName>
          <StyledDivFloatedRight>
            <Label color='green'>
              <Icon name="star" /> {this.props.stargazersCount}
            </Label>
            <Label>
              <Icon name="fork" /> {this.props.forkCount}
            </Label>
          </StyledDivFloatedRight>
      </StyledResultItem>
    )
  }
}
