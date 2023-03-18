import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import HomePage from '../screens/Home/HomePage'

const HomeNavigationStack = () => {
    return (
        <Route path="/HomePage" element={<div>
            <nav>
                <p>data</p>
            </nav>
            <Outlet />
        </div>}>
            <Route index element={<HomePage />} />
        </Route>
    )
}

export default HomeNavigationStack
