import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
const App = () => {
    return (
        <HashRouter>
            <Layout>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;