import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import PageNotImplemented from "./pages/PageNotImplemented.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<PageNotImplemented />} />
            </Routes>     
        </Layout>
    );
}

export default App;
