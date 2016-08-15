// import { React } from 'react';
const React = require('react');
const Link = require('react-router').Link

module.exports = React.createClass({
  render() {
    return (
    <div className="splash-img">
        <a href="homepage.html"
          className="splash-link hvr-shutter-out-horizontal">Enter Page</a>
    </div>
    );
  }
});
