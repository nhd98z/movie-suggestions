import React, { Component } from 'react'
import NavBarJustNow from '../components/NavBarJustNow';
import Footer from '../components/Footer';

class AboutUs extends Component {
    render() {
        return (
            <div className="home">
                <NavBarJustNow />
                <div className="center-uplist">
                    {/* <Suggestion/> */}

                    <div className="body-top-uplist">
                        {/* Top */}
                        <div className="aboutUs">
                            <center><span  style ={{fontSize : '30px'}}>Các câu hỏi thường gặp</span></center>
                            <div className="question">
                                <h4> 1. Nếu tôi không thể tìm thấy phim mà mình muốn thì sao ? </h4>
                                <p> Dù đã cố gắng nhưng đội ngũ
                                         admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn  </p>
                            </div>
                            <div className="question">
                                <h4> 2 . Tại sao lại là list thay vì một bộ phim ? </h4>
                                <p> Dù đã cố gắng nhưng đội ngũ
                                         admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn  </p>
                            </div>
                            <div className="question">
                                <h4> 3 . Tại sao lại là list thay vì một bộ phim ? </h4>
                                <p> Dù đã cố gắng nhưng đội ngũ
                                         admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn  </p>
                            </div>
                            <div className="question">
                                <h4> 4 . Tại sao lại là list thay vì một bộ phim ? </h4>
                                <p> Dù đã cố gắng nhưng đội ngũ
                                         admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn  </p>
                            </div>
                            <div className="question">
                                <h4> 5 . Tại sao lại là list thay vì một bộ phim ? </h4>
                                <p> Dù đã cố gắng nhưng đội ngũ
                                         admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn  </p>
                            </div>
                        </div>

                    </div>


                </div>
                <Footer />
            </div>
        )

    }
}
export default AboutUs;