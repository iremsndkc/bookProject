import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="bg-gray-300 min-h-screen">
          <Routes>
            <Route index path="/" element={<Product keyword={""} />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
