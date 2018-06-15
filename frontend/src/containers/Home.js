import React, { Component } from 'react'
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap
import NavBar from '../components/NavBar';
import Body from '../components/Body';
import Footer from '../components/Footer';
class Home extends Component {
    render() {

        return (
            <div className="home">
                <NavBar/>
                <div className ="center">
                    {/* <Suggestion/> */}
                    
                    <Body/>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;