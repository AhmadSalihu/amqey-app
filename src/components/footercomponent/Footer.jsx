import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation();
  return (
    <div className="grid-container">
    {location.pathname ==='/' && (
    <footer className="row center">&copy; Copyright 2021 All right Reserved</footer>
    )}
    </div>
  )
}
