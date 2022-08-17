import React from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header flex space-between align-center">
            <section className="container">
                <h1 className="logo">Mister Bitcoin</h1>
            </section>
            <nav>
                {/* prettier-ignore */}
                <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/contact">Contacts</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/statistic">Statistics</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            </nav>
        </header>
    )
}
