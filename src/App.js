import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/LoginPage";
import Header from "./components/Header";

import Home from "./components/Home";
import Details from "./components/DetailsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/detail/:id" element={<Details />} />
          <Route exact path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
