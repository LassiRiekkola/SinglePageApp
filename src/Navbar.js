import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link classname="navbar-brand" to='/'>SPA EXAMPLE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link classname="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link classname="nav-link" to="/contactus"> Contact Us</Link>
        </li>
        
      </ul>
      
        
      
    </div>
    </div>
</nav>
)
}