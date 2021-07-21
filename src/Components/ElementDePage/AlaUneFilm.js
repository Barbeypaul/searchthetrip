import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class AlaUne extends Component {
    render() {
        return (
            <div className="img-wrapper-alaune">
                {this.props.Films[this.props.Filmalaune] !== undefined ? <div>
                    <img alt={this.props.Films[this.props.Filmalaune].infoFilm.titre} width="100%" src={"https://img.youtube.com/vi/" + this.props.Films[this.props.Filmalaune].infoFilm.idYT + "/maxresdefault.jpg"} />
                    <div className="img-overlay-alaune">
                        <h4><span className="badge bg-light text-dark">{this.props.Films[this.props.Filmalaune].infoFilm.titre}</span></h4>
                        <Link to={"/Play?id=" + this.props.Films[this.props.Filmalaune].infoFilm.idYT}><button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Regarder <i className="far fa-play-circle"></i></button></Link>
                    </div>
                </div> : <div></div>}
            </div>
        )
    }
}

export default AlaUne
