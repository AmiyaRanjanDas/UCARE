import React from 'react'
import logo from "../../public/images/logo.png"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{background:"#ff6f6f"}}>
                <div className="container-fluid">
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <img src={logo} alt="" style={{width:"3rem"}}/>
                    <a className="navbar-brand m-0" href="#">WECARE</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar