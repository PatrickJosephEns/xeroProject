import React, { useState, useEffect, location, Link} from "react";

 
function NavBar() {

  return (
          <nav class="navbar navbar-expand-lg navbar-dark primary-color">
            <a class="navbar-brand" href="#">Xero</a>
            <button class="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="http://localhost:3000/home">
                    Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://localhost:3000/fetch">
                    Invoice data</a>   
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://localhost:3000/charts">
                    charts</a>
                </li>
                </ul>
            </div>
          </nav>
  );
}
 
export default NavBar;