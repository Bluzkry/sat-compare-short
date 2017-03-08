import React from 'react';
require('./../../www/styles.css');

class Submit extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
      <form id="submission" action="/score" method="post">

        <fieldset>
        <label> Please submit your SAT score:</label>
          <input id="score" type="integer" name="score"></input>
        </fieldset>

        <fieldset>
        <label>Please select your dream university:</label>
        <select id="university" name="university">
          <option value="Brown">Brown</option>
          <option value="CalTech">CalTech</option>
          <option value="Columbia">Columbia</option>
          <option value="Cornell">Cornell</option>
          <option value="Dartmouth">Dartmouth</option>
          <option value="Duke">Duke</option>
          <option value="Emory">Emory</option>
          <option value="Harvard">Harvard</option>
          <option value="John Hopkins">John Hopkins</option>
          <option value="MIT">MIT</option>
          <option value="Northwestern">Northwestern</option>
          <option value="Notre Dame">Notre Dame</option>
          <option value="Princeton">Princeton</option>
          <option value="Rice">Rice</option>
          <option value="Stanford">Stanford</option>
          <option value="University of Chicago">University of Chicago</option>
          <option value="UPenn">UPenn</option>
          <option value="Vanderbilt">Vanderbilt</option>
          <option value="WashU">WashU</option>
          <option value="Yale">Yale</option>
        </select>
        </fieldset>

        <input type="submit" value="Submit"></input>
      </form>
      </section>
    )
  }
}
export default Submit;