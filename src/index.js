import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Article from "./pages/Blog/Article";
import Blockcahin from "./pages/Blockchain/Blockchain";
import BlockchainCharts from "./pages/Blockchain/BlockchainCharts.";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="blog" element={<Blog/>}/>
                <Route path="blog/:id" element={<Article/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<NoPage/>}/>
                <Route path="blockchain" element={<Blockcahin/>}/>
                <Route path="charts" element={<BlockchainCharts/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
