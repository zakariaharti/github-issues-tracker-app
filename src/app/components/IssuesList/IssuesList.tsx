import * as React from 'react';
import styled from 'styled-components';

import { Issue as IssueInterface } from '../../utils/types';
import { Issue  } from './Issue';

interface IssuesListProps{
  issues: IssueInterface[];
  currentVisibleItems: number;
  onItemClick: (path: string) => void;
}

const StyledDiv = styled.div`
  background: white;
  border: 1px solid #dcdcdc73;
  border-top: 0;
`;

export const IssuesList: React.SFC<IssuesListProps> = (props) => {
  return(
    <StyledDiv>
      {props.issues.slice(0,props.currentVisibleItems).map(issue => {
        return(
          <Issue
            onItemClick={props.onItemClick}
            key={issue.id}
            {...issue}
          />
        )
      })}
    </StyledDiv>
  )
}

IssuesList.displayName = 'IssuesList';
