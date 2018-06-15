import React, { Component } from 'react'
import Footer from '../components/Footer';
import NavBarJustNows from '../components/NavBarJustNow';
import BodyJustNow from '../components/BodyJustNow';
class JustNow extends Component {
    render() {

        return (
            <div className="home">
                <NavBarJustNows/>
                <div className ="center">
                    {/* <Suggestion/> */}
                    <BodyJustNow/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default JustNow;