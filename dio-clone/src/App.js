import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Sign } from "./pages/sign";
import { Feed } from "./pages/feed";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
