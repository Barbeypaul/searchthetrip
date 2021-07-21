import React, { Component } from 'react'
import Top10Film from './ElementDePage/Top10Film'
import FilmFrAng from './ElementDePage/FilmFrAng'
// import FilmParChaineYt from './ElementDePage/FilmParChaineYt'
export class Films extends Component {
    render() {
        console.log(this.props.Films)
        return (
            <div className="margin-top">
                <div className="m-2 p-2">
                    <Top10Film keySwipper="FilmTop10Films" EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} Top10Accueil={this.props.Top10Accueil} Films={this.props.Films}></Top10Film>
                </div>
                <div className=" m-2 p-2">
                    <FilmFrAng keySwipper="FilmFilmFrAng" EnvoyerSuppFavori={this.props.EnvoyerSuppFavori} listeFavoris={this.props.listeFavoris} Films={this.props.Films}></FilmFrAng>
                </div>
                <div className=" m-2 p-2">
                    {/* <FilmParChaineYt Films={this.props.Films}></FilmParChaineYt> */}
                </div>
            </div>
        )
    }
}

export default Films
