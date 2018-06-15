import React, { Component } from 'react'
import logo from '../image/logo3.png'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'
// import img_13 from '../image/3.jpg'
class NavBarJustNow extends Component {
    state = {
        slideIndex: 0
    };
    render() {

        return (
            // + this.state.isShown ? 'show' : 'hide'
            <div className={"container-fuild header"}>
                <div className="center-img">
                    <div className="row">
                        <div className="center">
                            <div className="col-md-12 col-xs-12 logo">
                                <img src={logo} alt="Techkids" className="imgHeader img-responsive" />
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-xs-12 search">
                                <div className="input-group">
                                    <input style={{ borderRadius: '4px', width: '100%' }} className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />

                                </div>
                        </div> */}
                    </div>

                </div>
                <div className=" myNav">
                    <Navbar collapseOnSelect >

                        <Navbar.Header>
                            {/* <Navbar.Brand>
                                {/* <img src={logo} alt="Techkids" className="imgHeader img-responsive" /> */}
                            {/* </Navbar.Brand> */}
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <input type="text" className="form-control inputNav" placeholder="Search" />
                            <Nav>
                                <NavItem eventKey={1} >
                                    <Link to="/" style={{ color: 'black' }}>  <i className="fas fa-home" style={{ fontSize: '20px' }}></i></Link>
                                </NavItem>
                                <NavItem eventKey={2} >
                                    <Link to="/justNow" style={{ color: 'black' }}> Phim vừa Up <i className="far fa-clock"></i></Link>
                                </NavItem>
                                <NavItem eventKey={3} >
                                    <Link to="/upList" style={{ color: 'black' }}>Đăng list <i className="fas fa-upload"></i> </Link>
                                </NavItem>
                                <NavItem eventKey={4} >
                                    <Link to="/aboutUs" style={{ color: 'black' }}>    Hỏi đáp <i className="fas fa-pencil-alt"></i></Link>
                                </NavItem>
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>;

                </div>

            </div>

        )
    }
}

export default NavBarJustNow;