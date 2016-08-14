const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
// import { ReactRouter } from 'react-router';
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
const App = require('./components/app');
const Splash = require('./components/splash');
const Homepage = require('./components/homepage');
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Splash } />
      <Route path="homepage" component={ Homepage }></Route>
    </Route>
  </Router>
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(appRouter,
                  document.getElementById('root')
  );
});
