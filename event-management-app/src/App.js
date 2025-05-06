import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/edit/:id" element={<EditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
