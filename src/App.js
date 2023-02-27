import "./App.css";
import IndexPage from "./pages/Index/IndexPage";

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <h1>Fruit List</h1>
        </nav>
        <IndexPage />
      </div>
    </>
  );
}

export default App;
