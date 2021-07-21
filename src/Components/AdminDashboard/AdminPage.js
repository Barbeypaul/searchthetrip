import React, { Component } from 'react'
import AdminFilm from './AdminFilm'
import AdminFilmDisposition from './AdminFilmDisposition'
import AdminSerie from './AdminSerie'
export class AdminPage extends Component {
    render() {
        return (
            <div className="margin-top">
                <div className="m-5">
                    <AdminFilm idFilmALaUne={this.props.idFilmALaUne} EnvoyerFilmALaUne={this.props.EnvoyerFilmALaUne} Films={this.props.Films} SupprimerUnFilm={this.props.SupprimerUnFilm} EnvoyerNouveauFilm={this.props.EnvoyerNouveauFilm}></AdminFilm>
                </div>
                <div className="m-5">
                    <AdminFilmDisposition ModifierTop10Film={this.props.ModifierTop10Film} Films={this.props.Films} Top10List={this.props.Top10List}></AdminFilmDisposition>
                </div>
                <div className="m-5">
                    <AdminSerie EnvoyerSerieALaUne={this.props.EnvoyerSerieALaUne} idSerieALaUne={this.props.idSerieALaUne} SupprimerUneSerie={this.props.SupprimerUneSerie} Series={this.props.Series} EnvoyerNouvelleSerie={this.props.EnvoyerNouvelleSerie}></AdminSerie>
                </div>
            </div>
        )
    }
}

export default AdminPage
