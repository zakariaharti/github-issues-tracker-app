import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
   padding: 20px 100px;
   background: white;
   border: 1px solid #e4e4e4;
   border-top-left-radius: 6px;
   border-top-right-radius: 6px;
   border-top: 1px solid #6435c9;
`;

export const HomeHeader: React.SFC<{}> = (props) => {
  return(
    <StyledDiv>
      {props.children}
    </StyledDiv>
  );
}

HomeHeader.displayName = 'HomeHeader';
