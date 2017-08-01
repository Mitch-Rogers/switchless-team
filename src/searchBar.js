import React, {Component} from 'react';
// import PhotoList from './photo_list';

// searchbar component renders input and sort fields as well as the PhotoList component

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      sortBy: "0"
    }
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            <button>Go</button>
        </div>
      </div>

    );
  }

  onInputChange(term) {
    this.setState(term)
  }
}

export default SearchBar;
