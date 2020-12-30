import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

import GifDetail from "./components/GifDetail";
import Home from "./components/Home";

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  const performSearch = async (query = "cats") => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=XH4gOuRLQoFzabS39X9HiwjxYOcSSw54&q=${query}&limit=24&offset=0&rating=r&lang=en`
    );
    setGifs(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    performSearch();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header performSearch={performSearch} setLoading={setLoading} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home gifs={gifs} loading={loading} />}
          />
          <Route path="/gif/:id" render={(props) => <GifDetail {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
