import React, { Component } from 'react'
import SwiperCarousel from './CarouselFilm/Swiper'
export class MesFavoris extends Component {
    render() {
        if (this.props.listeFavoris !== undefined) {
            console.log('ArrayMesFavoris')
            const arrayFavoris = []
            Object.keys(this.props.listeFavoris).map(key => (
                this.props.Films[key] !== undefined ? arrayFavoris.push(this.props.Films[key].infoFilm) : (null)
            ))
            return (
                <div className="margin-top">
                    <h3 className="text-light m-3">Mes Films Favoris 🌊</h3>
                    <SwiperCarousel keySwipper="FavorisFilms" EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} ObjectDeFilms={arrayFavoris}></SwiperCarousel>
                </div>
            )
        } else {
            return (
                <div className="margin-top">
                    <p className="text-light text-center">Aucun Favoris 🌊</p>
                </div>
            )
        }
    }
}

export default MesFavoris
