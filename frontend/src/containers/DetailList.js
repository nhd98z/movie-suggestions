import React, { Component } from 'react'
import NavBarJustNow from '../components/NavBarJustNow';
import axios from '../axios'
import Footer from '../components/Footer';
import Moment from 'react-moment'
import StarRatingComponent from 'react-star-rating-component';
class DetailList extends Component {
    state = {
        rating: 1,
        onDone: false,
        loader: false,
    }
    componentDidMount = async () => {
        // axios.get(`api/lists/${this.props.match.pramsid}`)
        let obj, arr;
        let arr2;
        await axios.get(`/api/lists/${this.props.match.params.id}`)
            .then(data => {
                obj = data.data; arr = data.data.moviesId;
                arr2 = data.data.original_language
                this.setState({ obj: data.data })
                console.log(arr);

            })
            .catch(err => console.log(err));
            console.log(arr2)
        for (let i = 0; i < 6; i++) {
            axios.get(`/api/movies/${arr[i]}?language=${arr2[i]}`)
                .then((data) => {
                    let arr = (this.state.array ? this.state.array : []);
                    arr.push(data.data);
                    this.setState({ array: arr, loader: true })
                })
                .catch(err => console.log(err));
        }

    }
    onStarClick = async (nextValue, prevValue, name) => {
        await this.setState({ rating: nextValue });
        console.log(this.state.rating);
        axios.put(`/api/lists/${this.props.match.params.id}`, { score: this.state.rating })
            .then(data => { window.location.reload(true) })
            .catch(err => console.log(err))
    }
    render() {
        const { rating } = this.state;
        const body = (this.state.array ? this.state.array : []).map((value, index) => {
            if (index === 5) return (
                <div key={index}>
                    <div className="row " key={index} style = {{border : '1px solid #bababa' , borderRadius : '4px ' , margin : '10px'}}>
                        <div className="col col-md-3 col-ms-4 col-xs-8 imageShowDetail  " style={{
                            backgroundImage: `url('${this.state.array[index].posterUri}')`,
                        }}>
                        </div>
                        <div className="col col-md-8 col-ms-8 col-xs-12 nopadding ">
                            <div className="movie-name">
                                <h3 style={{ fontWeight: 'bold' }}>{this.state.array[index].title}</h3>
                                <p style={{ fontWeight: 'bold' }}>{this.state.array[index].release_date}</p>
                                <hr />
                                <div className="movie-detail">
                                    {/* overview */}
                                    <p >Nội Dung :   <span >{this.state.array[index].overview}  </span></p>
                                    <p >Thể loại : {this.state.array[index].genres.map((value, index) => <span key={index}>{value.name} || </span>)}</p>
                                    <p >Diễn viên : {this.state.array[index].actor.slice(1, 5).map((value, index) => <span key={index}>{value.name} || </span>)}</p>
                                    <p >Điểm IDMB :  <span >{this.state.array[index].vote_average}  </span></p>
                                    <p >Link  :  <a href={this.state.array[index].homepage} target='_blank'>{this.state.array[index].homepage}  </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" alert alert-info  rated" style={{ margin: '40px' }}>
                        <strong><i className="fas fa-volume-up"></i> Hey !</strong> Theo bạn list phim này được mấy điểm (0-6) ?
                    <StarRatingComponent
                            name="rate1"
                            starCount={6}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                        />
                    </div>

                </div>
            )
            else return (
                <div className="row " key={index} style = {{border : '1px solid #bababa' , borderRadius : '4px ' , margin : '10px'}}>
                    <div className="col col-md-3 col-ms-4 col-xs-8 imageShowDetail  " style={{
                        backgroundImage: `url('${this.state.array[index].posterUri}')`,
                    }}>
                    </div>
                    <div className="col col-md-8 col-ms-8 col-xs-12 nopadding ">
                        <div className="movie-name">
                            <h3 style={{ fontWeight: 'bold' }}>{this.state.array[index].title}</h3>
                            <p style={{ fontWeight: 'bold' }}>{this.state.array[index].release_date}</p>
                            <hr />
                            <div className="movie-detail">
                                {/* overview */}
                                <p >Nội Dung :   <span >{this.state.array[index].overview}  </span></p>
                                <p >Thể loại : {this.state.array[index].genres.map((value, index) => <span key={index}>{value.name} || </span>)}</p>
                                <p >Diễn viên : {this.state.array[index].actor.slice(1, 5).map((value, index) => <span key={index}>{value.name} || </span>)}</p>
                                <p >Điểm IDMB :  <span >{this.state.array[index].vote_average}  </span></p>
                                <p >Link  :  <a href={this.state.array[index].homepage ? this.state.array[index].homepage : `https://www.google.com.vn/search?query=${this.state.array[index].title}`} target='_blank'>{this.state.array[index].homepage ? this.state.array[index].homepage : `https://www.google.com.vn/search?query=${this.state.array[index].title}`}  </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })
        return (
            <div >
                <NavBarJustNow />
                <div className="center">
                    <div className="body-top">
                        {/* Top */}

                        <div className="ss" >
                            <div className=" alert alert-info" style={{ width: '100%' }}>
                                <h1 style={{ color : '#000000' }} ><i class="far fa-list-alt" style={{ color : '#000000' }}></i> {this.state.obj ? this.state.obj.name : ''}</h1>
                                <p style={{ fontSize: '13px' , color : '#000000'}}  ><span style={{ fontWeight: 'bold', fontSize: '15px' }} >Được đăng vào :  <i class="far fa-clock"> </i> </span>
                                    <Moment format="YYYY/MM/DD HH:mm" >

                                        {this.state.obj ? this.state.obj.createdAt : ''}
                                    </Moment>
                                </p>
                                {/* <span>Được đăng vào : </span>
                            <span style={{ fontWeight: "bold" }}>
                                <Moment format="YYYY/MM/DD HH:mm" >
                                    {this.state.obj ? this.state.obj.createdAt : ''}
                                </Moment>
                            </span> */}
                                <p></p>
                                <p style={{ fontSize: '13px ' , color : '#000000' }} ><span style={{ fontWeight: 'bold', fontSize: '15px' }} >Số lượt vote :  </span>{this.state.obj ? this.state.obj.vote : 0}</p>
                                <p style={{ fontSize: '13px' , color : '#000000' }}>  <span style={{ fontWeight: 'bold', fontSize: '15px' }} >Điểm trung bình :  </span> {(this.state.obj ? this.state.obj.vote : 0) ? (this.state.obj.score / this.state.obj.vote).toFixed(1) : 0}
                                </p>
                            </div>
                        </div>
                        {this.state.loader ? body : (<div className="loader"></div>)}

                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}
export default DetailList;