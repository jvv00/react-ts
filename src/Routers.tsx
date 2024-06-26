import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { LayoutNone } from './components/layout/Layout'
import Home from './views/Home/Home'
import About from './views/About'
import Signup from './views/Signup'

const Routers: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
            </Route>
            <Route path="/" element={<LayoutNone />}>
                <Route path="signup" element={<Signup />}></Route>
            </Route>

            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    </BrowserRouter>
)

export default Routers
