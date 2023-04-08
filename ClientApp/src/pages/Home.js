import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Nude Solutions - Developer Assignment</h1>
        <p>By Kevin Giang</p>
        
        <p>
            This project was developed based on the requirements set by
            Nude Solutions for the sole purpose of their interview process.
        </p>

        <h4>What I would like to add in the future</h4>
        <ul>
          <li>Typescript support for React frontend</li>
          <li>Redux/Sagas to handle FE app state & API calls</li>
          <li>Unit tests for both FE and BE</li>
          <li>Styling of the items table for nicer alignment between columns</li>
        </ul>

        <p>
            These are items I skipped over in consideration of the time/effort
            required to learn and/or implement them.
        </p>

        <h4>How to run</h4>
        <span>Start the MySQL server with</span>
        <br/>
        <code>docker compose up -d</code>
        <br/>
        <span>Start the application with VS or use the below command</span>
        <br/>
        <code>dotnet watch run</code>
      </div>
    );
  }
}
