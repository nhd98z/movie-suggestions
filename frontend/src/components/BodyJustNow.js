import React, { Component } from 'react'
import BodyTopJustNow from './BodyTopJustNow';
import axios from '../axios.js'
class BodyJustNow extends Component {

    state = {

    }

    componentDidMount = async () => {
        await axios.get('/api/lists')
            .then(data => {
                this.setState({ movies: data.data });

            })
            .catch(err => console.log(err))
        axios.get('/api/lists/count')
            .then(data => {
                this.setState({ length: data.data.count })


            })
            .catch(err => console.log(err))
    }
    page =  (index) => {
         axios.get(`/api/lists/?page=${index}`)
            .then(data => {
                this.setState({ movies: data.data });
                // window.location.reload(true)
                window.scrollTo(0, 0); //add animation
            })
            .catch(err => console.log(err))
    }
    render() {

        const bodyTop = (this.state.movies ? this.state.movies : []).map((value, index) => {
            return (<BodyTopJustNow key={index} index={index} list={(this.state.movies ? this.state.movies[index] : [])} id={(this.state.movies ? this.state.movies[index]._id : [])} />)
        })
        let len ; 
        if(this.state.length ){
            if(this.state.length / 10 > Math.round(this.state.length / 10)){
                len = Math.round(this.state.length / 10) + 1;
            }
            else{
                len = Math.round(this.state.length / 10) ;
            }
        }

        
        const length = (this.state.length ? len : 1) ;
        const pagination = Array.apply(null, Array(5)).map((value, index) => {
            
            return (<li style ={{cursor : 'pointer'}} key={index} onClick= {(length >= index + 1) ? this.page.bind(this, index + 1) : () => {}}><a style={{ border: '1px solid #bababa' }} >{index + 1}</a></li>)
        })
        return (
            <div className="body-top">
                {/* Top */}
                <div className="topList">
                    <center><span style={{ fontSize: '30px' }}> Phim Mới Up</span></center>
                </div>
                {bodyTop}
                <div style={{ textAlign: 'right' }}>
                    <ul className="pagination" >
                        {/* <li onClick={this.page.bind(this , 2)}>2</li> */}
                        {pagination}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BodyJustNow;