import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { LinkPageView1 } from "./routes";
const View1 = React.lazy(() => import("./components/views/View1"));
const Home = React.lazy(() => import("./components/views/Home"));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
    };
  }
  render() {
    return (
      <Router basename="/">
        <React.Suspense fallback={<ProgressSpinner />}>
          <Switch>
            <Route
              exact
              path="/"
              name="Page Home"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <div>404 Page Not Found</div>}
            />
            <Route
              exact
              path={LinkPageView1}
              name="View1"
              render={(props) => <View1 {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
