import * as React from 'react';
import { Form } from 'semantic-ui-react';

interface SearchFormProps{
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export class SearchForm extends React.Component<SearchFormProps>{

  handleInputChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    this.props.onSearchChange(target.value);
  }

  render(){
    return(
      <Form size="large">
        <Form.Input
          onChange={this.handleInputChange}
          value={this.props.searchQuery}
          icon={{name: "search"}}
          action={{
              content: "Search",
              color: "violet"
            }}
          iconPosition="left"
          fluid
          placeholder="Type Repository name" />
      </Form>
    )
  }
}
