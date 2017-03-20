import React from 'react';
import $ from 'jquery';
require('./../../public/styles.css');

class Score extends React.Component {
  constructor() {
    super();
    this.state = {
      score: null,
      university: null,
      percentile: null
    };
  }

  componentWillMount() {
    this.getUniversityData();
  }

  getUniversityData() {
    $.ajax({
      method: 'GET',
      url: 'api/score',
      success: data => {
        this.setState({
          score: data.score,
          university: data.university,
          percentile: data.percentile
        });
      }
    });
  }

  render() {
    return (
      <section>
      <p>You are in the {this.state.percentile}th percentile of enrolled freshman students at {this.state.university}.</p>

      <form id="submission" action="/" method="post">
        <input type="submit" value="Return"></input>
      </form>
      </section>
    );
  }
}
export default Score;
