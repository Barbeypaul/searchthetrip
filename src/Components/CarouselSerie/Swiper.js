import React, { Component, Fragment } from 'react'
import Info from './Info'
import Bouttons from './Bouttons';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css';


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// install Swiper modules
SwiperCore.use([Navigation]);

export class SwiperCarousel extends Component {

    render() {
        return (
            <div>
                <Swiper navigation={true} breakpoints={{
                    // when window width is >= 640px
                    300: {
                        width: 300,
                        slidesPerView: 1.5,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}
                    slidesPerView={5} spaceBetween={10} pagination={{
                        "clickable": true
                    }}
                    className="mySwiper"
                >
                    {Object.keys(this.props.ObjectSerie.infoSerie).map(key => {
                        return (
                            <div>
                                <SwiperSlide key={key} className="backgroundImg">
                                    <div className="containerSlide">
                                        <img alt={this.props.ObjectSerie.infoSerie[key].titre} className="imgSlide mt-3 mb-3" height="200px" src={"https://img.youtube.com/vi/" + this.props.ObjectSerie.infoSerie[key].idYT + "/maxresdefault.jpg"} />
                                        <div className="overlaySlide">
                                            <Bouttons key={key} keyFavoris={key} EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} idYT={this.props.ObjectSerie.infoSerie[key].idYT} date={this.props.ObjectSerie.infoSerie[key].date}></Bouttons>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                    }
                </Swiper>
                <div>
                    {
                        Object.keys(this.props.ObjectSerie.infoSerie).map(key => {
                            return (
                                <Info key={key} titre={this.props.ObjectSerie.infoSerie[key].titre} description={this.props.ObjectSerie.infoSerie[key].description} idYT={this.props.ObjectSerie.infoSerie[key].idYT} idInfo={"idInfo" + this.props.ObjectSerie.infoSerie[key].date} ></Info>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default SwiperCarousel
