import React, { Component } from 'react'
import NavBarJustNow from '../components/NavBarJustNow';
import Footer from '../components/Footer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from '../axios'
import fetch from 'isomorphic-fetch';
// import { debounce , throttle} from "lodash";
import * as _ from "lodash"
import { Redirect } from 'react-router-dom'
import { AsyncCreatable } from 'react-select/dist/react-select.es';
class UpList extends Component {


    state = {
        id: [],
        posterUri: [],
        value: [],
        original_language: []
    }

    // 
    // displayName: 'GithubUsers',
    // propTypes: {
    //     label: PropTypes.string,
    // },

    onChange = (value) => {
        this.setState({
            value_1: value,
        });
        console.log("value")
        console.log(value.original_language);
        // if(!value) return;
        let arr_id = this.state.id;
        let arr_posterUri = this.state.posterUri;
        let arr_value = this.state.value;
        let original_language = this.state.original_language;

        arr_id.push(value ? value.id : '');
        arr_posterUri.push(value ? value.posterUri : '');
        arr_value.push(value ? value : '')
        original_language.push(value ? value.original_language : '')

        this.setState({
            id: arr_id,
            posterUri: arr_posterUri,
            value: arr_value,
            original_language: original_language
        });
        console.log(this.state.id + " " + this.state.posterUri);

    }

    clear = (index) => {
        console.log(index);

        let arr_id = this.state.id;
        let arr_posterUri = this.state.posterUri;
        let arr_value = this.state.value;
        let original_language = this.state.original_language

        original_language.splice(index, 1)
        arr_id.splice(index, 1);
        arr_posterUri.splice(index, 1)
        arr_value.splice(index, 1)
        this.setState({
            id: arr_id,
            posterUri: arr_posterUri,
            value: arr_value,
            original_language: original_language
        });
    }
    debouncedFetch = _.debounce((searchTerm, callback) => {
        return fetch(`/api/movies/?content=${searchTerm}`)
            .then((result) => { return result.json() })
            .then(json => {
                console.log(json);

                callback(null, { options: json })
            })
            .catch((error) => callback(error, null));
    }, 500)

    getMovie = (input, callback) => {
        if (!input) {
            return callback(null, { options: [] });
        }

        this.debouncedFetch(input, callback)

    }
    // gotoUser(value, event) {
    //     window.open(value.html_url);
    // }
    handleChangeText = async (e) => {
        await this.setState({
            name: e
        })

    }
    submitMovie = (e) => {

        if (this.state.name && this.state.posterUri.length === 6 && this.state.id.length === 6) {
            e.preventDefault();
            axios.post('/api/lists', {
                moviesId: this.state.id,
                posterUri: this.state.posterUri,
                name: this.state.name,
                original_language: this.state.original_language
            })
                .then(data => {
                    this.setState({ switch: true, id: data.data._id });
                    // log
                })
                .catch(err => console.log(err))
        }
    }
    // 
    renderInput = (inputProps) => {
        if (this.state.value_1 == '') {
            this.state.placeholder = 'Select ...';
        } else {
            this.state.placeholder = '';
        }
        var setCurserPosAtEnd = (event) => {
            if (event.target)
                event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }
        return (
            <div className='Select-input'>
                <input {...inputProps} value={this.state.vavalue_1lue} onFocus={setCurserPosAtEnd} />
            </div>
        );
    }
    renderOption = (option) => {
        return (
            // <Highlighter
            //   searchWords={[this._inputValue]}
            //   textToHighlight={option.label}
            // />
            // console.log(option)

            <div className="searchMovie">
                <img src={option.posterUri !== 'https://image.tmdb.org/t/p/w500null' ? option.posterUri : 'https://vnkings.com/wp-content/uploads/2018/01/unknown_01.jpg'} style={{ width: '100px', height: 'auto' }} />
                <div className="searchMovie-detail">
                    <p style={{ fontWeight: 'bold', paddingLeft: '10px' }} >{option.title}</p>
                    <p style={{ fontSize: '12px', paddingLeft: '10px' }} ><span style={{ fontWeight: 'bold', fontSize: '13px' }} >Nội dung : </span>  {option.overview.substr(0, 100) + '...'}</p>
                    <p style={{ fontSize: '13px', paddingLeft: '10px' }} > <span style={{ fontWeight: 'bold', fontSize: '13px' }} >IDMB : </span>{option.vote_average}</p>
                </div>
            </div>
        );
    }
    // 
    renderValue = (option) => {
        console.log(option);

        return <strong >{option.title}</strong>;
    }
    render() {
        if (this.state.switch) {
            return <Redirect to={`/lists/${this.state.id}`} />
        }
        const AsyncComponent = this.state.creatable
            ? Select.AsyncCreatable
            : Select.Async;
        const post_arr = Array.apply(null, Array(6)).map((value, index) => {
            return (

                this.state.id[index]
                    ? (
                        <div>
                            <h4 style={{ color: '#428BCA' }}>#{index + 1} </h4>
                            <div key={index} className="row" style={{
                                marginTop: '10px', marginLeft: 'auto',
                                marginRight: 'auto', border: '1px solid #bababa', borderRadius: '4px',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'row', alignItems: 'start',
                                justifyContent: 'start',
                                position: 'relative'
                            }}>
                                <i class="fas fa-times" onClick={this.clear.bind(this, index)} style={{
                                    position: 'absolute',
                                    right: '0'
                                }}></i>
                                <img src={this.state.posterUri[index]} style={{ width: '100px', height: 'auto', margin: '10px' }} />
                                <div className="searchMovie-detail" style={{ marginTop: '10px', }}>
                                    <p style={{ fontWeight: 'bold', paddingLeft: '10px' }} >{this.state.value[index].title}</p>
                                    <p style={{ fontSize: '12px', paddingLeft: '10px' }} ><span style={{ fontWeight: 'bold', fontSize: '13px' }} >Nội dung :  </span>  {this.state.value[index].overview.substr(0, 100) + '...'}</p>
                                    <p style={{ fontSize: '13px', paddingLeft: '10px' }} > <span style={{ fontWeight: 'bold', fontSize: '13px' }} >IDMB : </span>{this.state.value[index].vote_average}</p>
                                </div>

                            </div>
                        </div>
                    )
                    : (<div className="section" key={index}>
                        <h4 style={{ color: '#428BCA' }}>#{index + 1} </h4>
                        <AsyncComponent
                            // value={this.state.value_1}
                            loadOptions={(this.getMovie)} //input tra ve json
                            // labelKey='title'
                            optionRenderer={this.renderOption} // render image
                            valueRenderer={this.renderValue} //inra
                            valueKey="id"
                            onBlurResetsInput={false}
                            onCloseResetsInput={false}
                            filterOptions={false}   //search voi ki tu dai
                            onChange={this.onChange} // set cai sau khi minh
                            placeholder='Nhập tên phim'
                            required
                        />
                    </div>))
        })
        return (
            <div className="home">
                <NavBarJustNow />
                <div className="center-uplist">
                    {/* <Suggestion/> */}

                    <div className="body-top-uplist" id="top_2">
                        {/* Top */}
                        <div className="topList">
                            <center><span style={{ fontSize: '30px' }}>Up Phim </span></center>
                        </div>
                        <form className="form-group">
                            <div className="rule">
                                <div className="row">
                                    <div className="col col-md-4 col-ms-12 col ms-12"  >
                                        {/* <div className="name" style = {{position : 'relative' , top : '0'}} > */}
                                        <h4 style={{ color: '#428BCA', padding: '0' }}>Nhập tên list phim của bạn</h4>
                                        <input style={{ marginTop: '10px' }} className="form-control" required onChange={e => this.handleChangeText(e.target.value)} />
                                        {/* </div> */}
                                        <div className="alert alert-danger" style={{ marginTop: '20px' }}>
                                            <strong><i className="fas fa-exclamation-triangle"></i>1 - Nghiêm cấm !</strong> Tuyệt đối không post / ghi các title khiếm nhã , tục tĩu , kích động thù địch

                                        </div>
                                        <div className="alert alert-info">
                                            <strong><i className="far fa-frown"></i></strong> Dù đã cố gắng nhưng đội ngũ
                                             admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn <i className="far fa-heart"></i>
                                        </div>
                                    </div>
                                    {/* <div className="col col-md-1 col-ms-12 col ms-12">
                                    </div> */}
                                    <div className="col col-md-8 col-ms-12 col ms-12">
                                        {post_arr}
                                    </div>
                                </div>
                                <center><button className="btn btn-success" onClick={this.submitMovie} style={{ marginTop: '30px', width: '200px', height: '40px', fontSize: '15px', fontWeight: 'bold' }}>Đăng list </button></center>

                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>

        )

    }
}
export default (UpList);