import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route>
            <News exact path="/" pageSize={5} country="in" category="general" />
          </Route>
          <Route>
            <News exact path="/business" pageSize={5} country="in" category="business" />
          </Route>
          <Route>
            <News exact path="/entertainment" pageSize={5} country="in" category="entertainment" />
          </Route>
          <Route>
            <News exact path="/general" pageSize={5} country="in" category="general" />
          </Route>
          <Route>
            <News exact path="/health" pageSize={5} country="in" category="health" />
          </Route>
          <Route>
            <News exact path="/science" pageSize={5} country="in" category="science" />
          </Route>
          <Route>
            <News exact path="/health" pageSize={5} country="in" category="health" />
          </Route>
          <Route>
            <News exact path="/technology" pageSize={5} country="in" category="technology" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;