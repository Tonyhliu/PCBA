// import { React } from 'react';
const React = require('react');
const Link = require('react-router').Link

module.exports = React.createClass({
  render() {
    return (
    <div>
      <Link to="/homepage">Enter Page!</Link>
    </div>
    );
  }
});
