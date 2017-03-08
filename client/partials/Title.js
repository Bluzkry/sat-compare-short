import React from 'react';
require('./../../www/styles.css');

class Title extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>SAT Compare</h1>
      </header>
      {this.props.children}
      </div>
    )
  }
}

export default Title;