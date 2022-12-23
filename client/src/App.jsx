import React from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import {TodoProvider} from "./TodoContext";

const App = () => {
    return (
        <TodoProvider>
            <Layout>
                <Header />
                <Home />
            </Layout>
        </TodoProvider>
    );
};

export default App;