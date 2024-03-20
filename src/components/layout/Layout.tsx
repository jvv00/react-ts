import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
    <div>
        <Header name="Layout" />
        <main id="main">
            <Outlet />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <h1 className="text-3xl font-bold text-blue-600">React + Vite + TypeScript + Tailwind</h1>
        </main>
        <Footer />
    </div>
)

export const LayoutNone: React.FC = () => (
    <div>
        <Outlet />
    </div>
)

export default Layout
