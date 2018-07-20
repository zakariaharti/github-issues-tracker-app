import * as React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props{
  message: string;
  onClick: () => void;
}

const StyledDivContainer = styled.div`
  padding: 20px;
  text-align: center;
`;


export const ShowMoreButton: React.SFC<Props> = (props) => {
  return(
    <StyledDivContainer>
      <Button color="violet" onClick={props.onClick}>{props.message}</Button>
    </StyledDivContainer>
  );
}
