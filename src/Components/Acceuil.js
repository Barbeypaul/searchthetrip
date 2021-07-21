import React, { Component } from 'react'
import Top10Film from './ElementDePage/Top10Film'
import AlaUne from './ElementDePage/AlaUneFilm'
import AlaUneSerie from './ElementDePage/AlaUneSerie'
import FooterNav from './Footer/Footer'
export class Acceuil extends Component {
    render() {
        return (
            <div className="mt-5">
                <AlaUne Filmalaune={this.props.Filmalaune.id} Films={this.props.Films}></AlaUne>
                <div className="m-2 p-2">
                    <Top10Film keySwipper="Top10Acceuil" EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} Top10Accueil={this.props.Top10Accueil} Films={this.props.Films}></Top10Film>
                </div >
                <AlaUneSerie keySwipper="AlaUneSerieAcceuil" idSerieALaUne={this.props.idSerieALaUne} Series={this.props.Series}></AlaUneSerie>
                <div>
                    <FooterNav></FooterNav>
                </div>
            </div>
        )
    }
}

export default Acceuil
