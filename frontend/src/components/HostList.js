import React, { Component } from 'react'
import movie_1 from '../image/movie_1.jpg'
import movie_2 from '../image/movie_2.jpg'
import movie_3 from '../image/movie_3.jpg'
import movie_4 from '../image/movie_4.jpg'
import movie_5 from '../image/movie_5.jpg'
import movie_6 from '../image/movie_6.jpg'

class HostList extends Component {
    render() {
        return (
            <div className="ok">
                <div className=" hostlist">
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_1} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_2} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_3} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_4} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_5} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                    <div className="col col-md-2 col-xs-4 nopadding detail-high">
                        <img src={movie_6} className="img-responsive" />
                        <div className="detail-low">
                            <span> <i className="fas fa-video"></i> Cau be ngoaiquoc</span>
                            <hr />
                            <span> <i className="fas fa-info-circle"></i> Phim kha hay , noi dung ve ... mot thang con cac mat lon </span>
                            <hr />
                            <span> <i className="fas fa-chevron-circle-right"></i>Trong list nen xem truoc </span>
                        </div>
                    </div>
                </div>
                <div className="contentList">
                    <p>List phim cực đỉnh Vol.1</p>
                    <button className="btn btn-primary"> <i className="fas fa-video" style={{ color: '#EA4335' }}></i> #top {this.props.id + 1} </button>
                    <button className="btn buttonContent" style={{ marginLeft: '10px' }}><i className="far fa-eye" style={{ color: '#EA4335' }}></i> 130 </button>
                </div>
            </div>
        );


    }
}

export default HostList;