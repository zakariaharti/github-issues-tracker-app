import * as React from 'react';

import { Issue } from '../../utils/types';
import { IssuesList } from '../IssuesList/IssuesList';

interface RepositoryDetailProps{
  issues: Issue[];
  currentVisibleItems: number;
  onItemClick: (path: string) => void;
}



export const RepositoryDetail: React.SFC<RepositoryDetailProps> = (props) => {
  return(
    <IssuesList
      onItemClick={props.onItemClick}
      issues={props.issues}
      currentVisibleItems={props.currentVisibleItems}
    />
  );
}

RepositoryDetail.displayName = 'RepositoryDetail';
