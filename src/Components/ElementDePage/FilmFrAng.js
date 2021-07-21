import React, { Component } from 'react'
import SwiperCarousel from '../CarouselFilm/Swiper'

export class FilmFrAng extends Component {
    render() {
        const arrayFr = []
        const arrayEng = []
        const fr = Object.keys(this.props.Films).map(key => {
            if (this.props.Films[key].infoFilm.language === 'fr') {
                return arrayFr.push(this.props.Films[key].infoFilm)
            } else {
                return arrayEng.push(this.props.Films[key].infoFilm)
            }
        }
        )
        console.log(fr);
        return (
            <div>
                <div>
                    <h3 className="text-light">Films de surf Francais</h3>
                    <SwiperCarousel keySwipper={this.props.keySwipper} EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} ObjectDeFilms={arrayFr}></SwiperCarousel>
                </div>
                <div>
                    <h3 className="text-light">Films de surf Anglais</h3>
                    <SwiperCarousel keySwipper={this.props.keySwipper} EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} ObjectDeFilms={arrayEng}></SwiperCarousel>
                </div>
            </div>
        )
    }
}

export default FilmFrAng
