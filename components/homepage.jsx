const React = require('react');
const Link = require('react-router').Link

module.exports = React.createClass({
  render() {
    return (
    <div>
      <h1>Welcome to home page</h1>
      <Link to="/">Click Me to go back</Link>
    </div>
    );
  }
});
