import "./App.css";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavMenu />
      <div>
        <Routes>
          <Route path="/">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
