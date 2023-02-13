import React from "react";
import About from "../pages/About";
import { Link, Outlet, RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'

export default function Nav() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route path="/about" element={<About />} />
            </Route>
        )
    )
    return (
        <div className="nav">
            <RouterProvider router={router} />
        </div>
    )
}
const Root = () => {
    return (
        <>
            <div className="linkDiv">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="outletDiv">
                <Outlet />
            </div>
        </>
    )
}