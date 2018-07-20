import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props{
  message: string;
}

const StyledDivContainer = styled.div`
  min-height: 500px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-top: 0;
`;

const StyledDiv = styled.div`
  text-align: center;

  i{
    font-size: 10em !important;
    color: gray !important;
  }

  p{
    color: gray;
    font-size: 1.1em;
  }
`;

export const ResultNotFound: React.SFC<Props> = (props) => {
  return(
    <StyledDivContainer>
      <StyledDiv>
         <Icon name="react" size="large" />
         <p>{props.message}</p>
      </StyledDiv>
    </StyledDivContainer>
  );
}
