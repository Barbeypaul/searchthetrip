import React, { Component } from 'react'
import AlaUneSerie from './ElementDePage/AlaUneSerie'
import ListeSeries from './ElementDePage/ListeSeries'
export class Series extends Component {
    render() {
        return (
            <div className="margin-top">
                <AlaUneSerie keySwipper="SerieAlaUneSerie" idSerieALaUne={this.props.idSerieALaUne} Series={this.props.Series}></AlaUneSerie>
                <ListeSeries keySwipper="SerieListeSeries" Series={this.props.Series}></ListeSeries>
            </div>
        )
    }
}

export default Series
