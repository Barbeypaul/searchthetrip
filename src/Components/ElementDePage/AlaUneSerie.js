import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import SwiperSerie from '../CarouselSerie/Swiper'

export class AlaUneSerie extends Component {
    render() {
        return (
            <div>
                {this.props.idSerieALaUne !== undefined ?
                    <div key={this.props.idSerieALaUne} className="m-2">
                        <h3 className="text-light m-3">Serie a la une : {this.props.Series[this.props.idSerieALaUne.id].titre}</h3>
                        <SwiperSerie keySwipper={this.props.keySwipper} ObjectSerie={this.props.Series[this.props.idSerieALaUne.id]}></SwiperSerie>
                    </div>
                    : <div className="text-center text-light">Aucune serie</div>}
            </div>
        )
    }
}

export default AlaUneSerie
