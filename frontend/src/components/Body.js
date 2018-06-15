import React, { Component } from 'react'
import BodyTop from './BodyTop';
import axios from '../axios.js'
import champion from '../image/champion.jpg'
import second from '../image/2prize.png'
import third from '../image/3prize.jpg'
class Body extends Component {
    state = {

    }
    componentDidMount() {
        axios.get('/api/lists/top10')
            .then(data => {
                this.setState({ movies: data.data });
                console.log(this.state.movies);
            })
            .catch(err => console.log(err))
    }
    render() {
        const bodyTop = (this.state.movies ? this.state.movies : []).map((value, index) => {
            if (index === 0) {
                return (
                    <div key={index}>
                        <div style= {{marginBottom : '-8%' , marginLeft : '-2%'  , borderRadius : '100%'}}>
                        <img src={champion} style = {{width : '50px' , height : 'auto' ,     transform: 'rotate(-30deg)'}} />
                        </div>
                        <BodyTop key={index} index={index} list={(this.state.movies ? this.state.movies[index] : [])}
                            id={(this.state.movies ? this.state.movies[index]._id : [])} />
                    </div>
                )
            }
            else if (index === 1) {
                return (
                    <div key={index}>
                        <div style= {{marginBottom : '-9%' , marginLeft : '-2%'  , borderRadius : '100%'}}>
                        <img src={second} style = {{width : '40px' , height : 'auto' ,     transform: 'rotate(-30deg)'}} />
                        </div>
                        <BodyTop key={index} index={index} list={(this.state.movies ? this.state.movies[index] : [])}
                            id={(this.state.movies ? this.state.movies[index]._id : [])} />
                    </div>
                )
            }
            else if (index === 2) {
                return (
                    <div key={index}>
                        <div style= {{marginBottom : '-9%' , marginLeft : '-2%'  , borderRadius : '100%'}}>
                        <img src={third} style = {{width : '40px' , height : 'auto' ,     transform: 'rotate(-28deg)'}} />
                        </div>
                        <BodyTop key={index} index={index} list={(this.state.movies ? this.state.movies[index] : [])}
                            id={(this.state.movies ? this.state.movies[index]._id : [])} />
                    </div>
                )
            }
            return (<BodyTop key={index} index={index} list={(this.state.movies ? this.state.movies[index] : [])} id={(this.state.movies ? this.state.movies[index]._id : [])} />)
        })
        return (
            <div className="body-top">
                {/* Top */}
                <div className="aboutUs">
                    <center><span style={{ fontSize: '30px' }}>Top Phim Khủng</span></center>
                </div>
                {bodyTop}

            </div>
        )
    }
}

export default Body;