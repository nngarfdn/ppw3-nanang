import { Button } from "bootstrap";
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderApp() {
  const [isShow, setShow] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const { pathname } = useLocation();

  const onClickBurgerButton = function () {
    setShow(!isShow);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#!">
        Nanang
      </a>

      <button
        onClick={onClickBurgerButton}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toogle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={'collapse navbar-collapse ${isShow ? "show" : ""}'}
        id="navbarCollapse"
      >
        <ul className="navbar-nav mr-auto">
          <li className={'nav-item ${pathname === "/" ? "active" : "" '}>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li
            className={
              'nav-item ${pathname.indexOf("/blog") > -1 ? "active" : ""}'
            }
          >
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>

          <li
            className={
              'nav-item ${pathname.indexOf("/about") > -1 ? "active" : ""}'
            }
          >
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className={'nav-item ${pathname === "/#!" ? "active" : "" '}>
            <a
              className="nav-link disabled"
              href="!#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tugas Praktikum
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/penjualan">
                Penjualan Telur
              </Link>

              <Link className="dropdown-item" to="/programming">
                Programming Jokes
              </Link>
               
              {/* <div class="dropdown-divider"></div> */}
              {/* <a class="dropdown-item" href="#">
                Something else here
              </a> */}
            </div>
          </li>
        </ul>

        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default HeaderApp;
