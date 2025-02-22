import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-black">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
