import React, { Component, Fragment } from 'react'
import SwiperSerie from '../CarouselSerie/Swiper'
export class ListeSeries extends Component {
    render() {
        return (
            <div className="">
                {this.props.Series !== undefined ? <div>
                    {Object.keys(this.props.Series).map(key => {
                        return (
                            <Fragment key={key} >
                                <div className="m-2 p-2">
                                    <h3 className="text-light m-3">{this.props.Series[key].titre}</h3>
                                    <SwiperSerie keySwipper={this.props.keySwipper} ObjectSerie={this.props.Series[key]}></SwiperSerie>
                                </div>
                            </Fragment>
                        )
                    }
                    )
                    }
                </div> : <div className="text-center text-light">Aucune serie</div>}
            </div>
        )
    }
}

export default ListeSeries
