import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/Index/IndexPage";
import ViewFruitPage from "./pages/ViewFruit/ViewFruitPage";

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <h1>Fruit List</h1>
        </nav>
        <Router>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/fruit" element={<ViewFruitPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
