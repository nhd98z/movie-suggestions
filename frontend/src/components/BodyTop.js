import React, { Component } from 'react'
// import movie_1 from '../image/movie_1.jpg'
// import movie_2 from '../image/movie_2.jpg'
// import movie_3 from '../image/movie_3.jpg'
// import movie_4 from '../image/movie_4.jpg'
// import movie_5 from '../image/movie_5.jpg'
// import movie_6 from '../image/movie_6.jpg'
import { Link } from 'react-router-dom';
class BodyTop extends Component {
    state = {
    };

    render() {

        return (
           
            <div className="top-body">
                <br />
                <Link to = {`/lists/${this.props.id}`} style={{width : '100%'}}>
                {/* <span style = {{color: 'rgb(66, 133, 244)' }}>1</span> */}
                <div className="row detail-high">
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[0]}')`,

                    }}>
                    </div>
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[1]}')`,

                    }}>
                    </div>
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[2]}')`,

                    }}>
                    </div>
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[3]}')`,

                    }}>
                    </div>
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[4]}')`,

                    }}>
                    </div>
                    <div className="col col-md-2 col-xs-4 imageShow nopadding " style={{
                        backgroundImage: `url('${this.props.list.posterUri[5]}')`,

                    }}>
                    </div>
                    <div className="detail-low">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
                 </Link>
                <div className="contentList">
                    <p>{this.props.list.name}</p>
                    <button disabled className="btn btn-primary"> <i className="fas fa-video" style={{ color: '#EA4335' }}></i> Top {this.props.index + 1} </button>
                    <button className="btn buttonContent" style={{ marginLeft: '10px' }}><i className="far fa-eye" style={{ color: '#EA4335' }}></i> Số Vote : {this.props.list.vote} </button>
                    <button className="btn btn-danger buttonContent" style={{ marginLeft: '10px' }}><i className="far fa-eye" style={{ color: '#000000' }}></i> Điểm : {( this.props.list.vote !== 0) ? (this.props.list.score / this.props.list.vote).toFixed(1) : 0} </button>
                </div>
            </div>
           
        );  


    }
}

export default BodyTop;