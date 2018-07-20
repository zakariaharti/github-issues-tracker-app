import * as React from 'react';
import styled from 'styled-components';

import { Repository } from '../../utils/types';
import { SearchResultList } from './SearchResultList';
import { ResultNotFound } from '../../common/ResultNotFound';

interface SearchResultProps{
  isNotFound: boolean;
  results: Repository[];
  currentVisibleItems: number;
  onItemClick: (path: string) => void;
}

const StyledDiv = styled.div`
   background: white;
   padding: 10px 20px;
   border: 1px solid #e4e4e4;
   border-top: 0;
   color: gray;
`;

export const SearchResult: React.SFC<SearchResultProps> = (props) => {
  if(props.isNotFound){
    return(
      <ResultNotFound message="no repository found" />
    )
  }
  return(
    <React.Fragment>
      <StyledDiv>
        <p>{props.results.length} of macthes found</p>
      </StyledDiv>
      <SearchResultList
        onItemClick={props.onItemClick}
        results={props.results}
        currentVisibleItems={props.currentVisibleItems}
       />
    </React.Fragment>
  );
}

SearchResult.displayName = 'SearchResult';
