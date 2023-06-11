// import PropTypes from 'prop-types'
import React from 'react'

const Navbar = (props) => {
     return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning " href="/">NewMonkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-success" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/business">business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/entertainment">entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/general">general</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/health">health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/science">science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/sports">sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-success" href="/technology">technology</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar