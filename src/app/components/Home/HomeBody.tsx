import * as React from 'react';
import { Form } from 'semantic-ui-react';

export const HomeBody: React.SFC<{}> = (props) => {
  return(
    <div>
      {props.children}
    </div>
  );
}

HomeBody.displayName = 'HomeBody';
