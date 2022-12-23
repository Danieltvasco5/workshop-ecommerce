import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Header from "../components/Header";
import {DetailProduct} from "../components/DetailProduct";
import {TodoProvider} from "../TodoContext";
const App = () => {
    return (
        <HashRouter>
            <TodoProvider>
                <Layout>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail" element={<DetailProduct />} />
                    </Routes>
                </Layout>
            </TodoProvider>
        </HashRouter>
    );
};

export default App;