import React, { Component, Fragment } from 'react'
import ModalFilm from './ModalFilm'
export class AdminFilm extends Component {
    state = {
        radioChecked: this.props.idFilmALaUne.id
    }
    handleCheckedRadio = (event) => {
        const id = event.target.value
        this.props.EnvoyerFilmALaUne(id)
    }
    handleRemove = (event) => {
        const id = event.target.value
        this.props.SupprimerUnFilm(id)
    }
    render() {
        return (
            <div>
                <p className="text-light">Ajouter un Film / Liste des Films</p>
                <div className="card">
                    <div className="card-header">
                        <button
                            type="button"
                            className="btn btn-dark"
                            data-mdb-toggle="modal"
                            data-mdb-target="#ModalAjouterUnFilm"
                        >Ajouter un Film <i className="fas fa-film"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        {this.props.Films !== undefined ? <div>
                            <table className="table align-middle table-responsive table-wrapper " >
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">date</th>
                                        <th scope="col">langue</th>
                                        <th scope="col">idYT</th>
                                        <th scope="col">Chaine</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Film a la une</th>
                                        <th scope="col">Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(this.props.Films).map(key => {
                                        return (
                                            <Fragment key={key}>
                                                <tr>
                                                    <th scope="row">{key}</th>
                                                    <td>{this.props.Films[key].infoFilm.titre}</td>
                                                    <td>{this.props.Films[key].infoFilm.date}</td>
                                                    <td>{this.props.Films[key].infoFilm.language === "eng" ? <i className="flag flag-united-kingdom"></i> : <i className="flag flag-france"></i>}</td>
                                                    <td>{this.props.Films[key].infoFilm.idYT}</td>
                                                    <td>{this.props.Films[key].infoFilm.nomDeChaine}</td>

                                                    <td><img alt={this.props.Films[key].infoFilm.titre} className="imgSlide" height="50px" src={"https://img.youtube.com/vi/" + this.props.Films[key].infoFilm.idYT + "/maxresdefault.jpg"} /></td>
                                                    <td>
                                                        {
                                                            this.state.radioChecked === key ?
                                                                < input key={key} onClick={this.handleCheckedRadio} className="m-1" type="radio" name="radioNoLabel" value={key} />
                                                                :
                                                                <input key={key} onClick={this.handleCheckedRadio} className="m-1" type="radio" name="radioNoLabel" value={key} />
                                                        }
                                                    </td>
                                                    <td>
                                                        <button onClick={this.handleRemove} className="form-check-input" type="button" value={key} className="btn btn-danger btn-sm px-3">
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div> : <div>
                            <p>Aucun Film ajouté</p>
                        </div>}
                    </div>
                </div>
                <ModalFilm EnvoyerNouveauFilm={this.props.EnvoyerNouveauFilm}></ModalFilm>
            </div >
        )
    }
}

export default AdminFilm
