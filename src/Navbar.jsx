import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Book from './Book'
import BookDetail from './BookDetail'


export default function Navbar() {
  return (
      <nav>
          
          <h1>E-Library</h1>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Book">Book</Link></li>
          </ul>

    </nav>
  )
}
