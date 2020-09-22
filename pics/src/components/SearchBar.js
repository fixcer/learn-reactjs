import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit = (event) => {
    console.log('form submit');
    event.preventDefault();

    // Goi ham o component cha
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
