import React, { Component } from 'react'
import logo from '../image/logo3.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="centerFooter">
                    <div className="row" >
                        <div className="col col-md-3 col-sm-12 col-xs-12 footer-center ">
                            <img src={logo} alt="Techkids" className="imgHeader img-responsive" />
                        </div>
                        <div className="col col-md-3 col-sm-4  col-xs-12 footer-left">
                            <h3>Company</h3>
                            <p>Hà Qúy Anh</p>
                            <p>Cường Hoàng</p>
                            <p>Nguyễn Hữu Dũng</p>
                        </div>
                        <div className="col col-md-3 col-sm-4  col-xs-12 footer-left">
                            <h3>Source</h3>
                            <p>GitHub</p>
                            <p>Movie</p>
                            <p>W3School , Stackoverflow</p>
                        </div>
                        <div className="col col-md-3 col-sm-4  col-xs-12 footer-left">
                            <h3>About Us </h3>
                            <p>Tao học hành chăm chỉ quên ăn
                                quên ngủ , không phải là
                                vì cua gái , mà nếu cua gái thì
                                cần gì học vì tao tốt bụng , đẹp
                                trai
                            </p>
                        </div>
                    </div>
                    <hr />
                    <center><h3>Social Media</h3></center>
                    <div className="fotterIcon">
                        <i className="fab fa-facebook-f" style={{ color: '#4267B2' }}></i>
                        <i className="fab fa-twitter" style={{ color: '#1B95E0' }}></i>
                        <i className="fab fa-reddit-alien" style={{ color: '#FF4500' }}></i>
                        <i className="fab fa-google" style={{ color: '#EA4335' }}></i>
                        <i className="fab fa-instagram" style={{ color: '#A52CB6' }}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;