import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import GifDetail from "./components/GifDetail";
import Home from "./components/Home";

import GiphyState from "./context/GiphyState";

function App() {
  return (
    <GiphyState>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/gif/:id"
              render={(props) => <GifDetail {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </GiphyState>
  );
}

export default App;
