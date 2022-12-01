import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
