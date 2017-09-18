import React, { Component } from 'react';
import SearchBar from './search_bar'
import ResultList from './result_list'
import $ from 'jquery'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }
  }

  requestList(term) {
    const SearchTerm = term.replace(' ', '+')
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${SearchTerm}`
    let searchResults = $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      data: {
        origin: '*'
      },
      success: (response) => this.setState({
          searchResults: response
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className='top-border'>
        </div>
        <div className="App-header">
          <h1>Search Wikipedia</h1>
        </div>
        <SearchBar onSearchTermChange={this.requestList.bind(this)} />

        <a href='https://en.wikipedia.org/wiki/Special:Random' rel='noopener noreferrer' target='_blank'>
          <button className='btn btn-primary'>
            Im feeling lucky
          </button>
        </a>
        <br />
        
        <ResultList results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
