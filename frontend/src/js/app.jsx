import React from 'react';

class App extends React.Component {

  async search() {
    const searchTerm = this.refs.searchTerm.value;
    const result = await fetch(`/api/search/${searchTerm}`);
    const json = await result.json();
    debugger;
  }

  render() {
    return (
      <div>
        <input placeholder="search" ref="searchTerm"/>
        <button onClick={this.search.bind(this)}>
          {"search"}
        </button>
      </div>
    );
  }
}

export default App;
