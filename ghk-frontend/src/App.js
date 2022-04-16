import "./App.css";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <div>
          <Routes>
            <Route path="/" /*element={<Home />}*/ />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
