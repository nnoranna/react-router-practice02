import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </header>
  )
}

export default Header