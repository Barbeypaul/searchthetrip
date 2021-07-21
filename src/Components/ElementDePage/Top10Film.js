import React, { Component } from 'react'
import SwiperCarousel from '../CarouselFilm/Swiper'


export class Top10Film extends Component {

    render() {
        const top10Object = []
        Object.keys(this.props.Top10Accueil).map(key => {
            return (this.props.Films[this.props.Top10Accueil[key]] !== undefined ? top10Object.push(this.props.Films[this.props.Top10Accueil[key]].infoFilm) : (null))
        }
        )
        console.log(top10Object)
        return (
            <div>
                <h3 className="text-light">Top 10 🤙</h3>
                <SwiperCarousel keySwipper={this.props.keySwipper} EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} ObjectDeFilms={top10Object}></SwiperCarousel>
            </div>
        )
    }
}

export default Top10Film
