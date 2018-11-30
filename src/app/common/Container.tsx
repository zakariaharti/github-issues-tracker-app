import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  min-height: 400px;
  border-top: 2px solid #9183e1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

/**
 * @author zakaria harti
 */
export const Container: React.SFC<{}> = (props) => {
  return(
    <StyledDiv>
      {props.children}
    </StyledDiv>
  );
}
