import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Ha Wing Hong
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* collapse menu */}
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#intro">
                  Introduction
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Achievement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
