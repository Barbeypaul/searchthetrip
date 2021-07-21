import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logo/logo"
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">

                    <div className="container-fluid">

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <Logo></Logo>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Series">Séries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Films">Films / Documentaires</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/MesFavoris">MesFavoris</Link>
                                </li>
                                {this.props.Admin === true ?
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Admin">Admin</Link>
                                    </li> : (null)
                                }

                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="m-2">
                            </div>
                            <a
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    alt="image-utilisateur"
                                    src={this.props.photoURL}
                                    className="rounded-circle m-2"
                                    height="25"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end m-2"
                                aria-labelledby="navbarDropdownMenuLink"
                            >

                                <li className="">
                                    <div onClick={this.props.logout} className="dropdown-item text-center bg-dark text-light" >Deconnexion <i className="fab fa-google"></i></div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar
