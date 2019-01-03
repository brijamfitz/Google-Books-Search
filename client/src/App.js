import React from "react";
import Books from "./pages/Books";
import SavedBooks from "./pages/SavedBooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/savedbooks" component={SavedBooks} />
            {/* <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
