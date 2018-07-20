import * as React from 'react';
import {
  Image,
  Label,
  Icon
} from 'semantic-ui-react';
import styled from 'styled-components';

import { Repository } from '../../utils/types';
import { ListViewItem } from '../../common/ListViewItem';

interface SearchResultItemProps extends Repository{
  onItemClick: (path: string) => void;
}

export const SearchResultItem: React.SFC<SearchResultItemProps> = (props) => {
  return(
    <ListViewItem
      onItemClick={props.onItemClick}
      ownerWithName={props.nameWithOwner}
      name={props.nameWithOwner}
      description={
        props.description ?
        props.description.slice(0,100)+' ..' :
        props.description
      }
      avatarUrl={props.owner.avatarUrl}
      stargazersCount={props.stargazers.totalCount}
      forkCount={props.forkCount}
    />
  );
}

SearchResultItem.displayName = 'SearchResultItem';
