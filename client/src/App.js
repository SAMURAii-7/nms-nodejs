import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
