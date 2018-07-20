import * as React from 'react';
import styled from 'styled-components';

import { Repository } from '../../utils/types';
import { SearchResultItem } from './SearchResultItem';

interface SearchResultListProps{
  results: Repository[];
  currentVisibleItems: number;
  onItemClick: (path: string) => void;
}

const StyledResultsList = styled.div`
  background: white;
  min-height: 500px;
  border: 1px solid #e4e4e4;
  border-top: 0;
  padding-bottom: 0px;
`;

export const SearchResultList: React.SFC<SearchResultListProps> = (props) => {
  return(
    <StyledResultsList>
      {props.results.slice(0,props.currentVisibleItems).map(result => {
        return(
          <SearchResultItem
            onItemClick={props.onItemClick}
            key={result.id}
            {...result} />
        );
      })}
    </StyledResultsList>
  );
}

SearchResultList.displayName = 'SearchResultList';
