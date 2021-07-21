import React, { Component } from 'react'

export class ModalFilm extends Component {
    state = {
        titre: null,
        description: null,
        idYT: null,
        nomDeChaine: null,
        language: null,
        etatFormulaire: false
    }
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }
    handleChangeLanguage = (event) => {
        const value = event.target.value
        this.setState({
            language: value
        })
        console.log(this.state);
    }
    createFilm = (event) => {
        event.preventDefault()
        const infoFilm = {
            titre: this.state.titre,
            description: this.state.description,
            idYT: this.state.idYT,
            nomDeChaine: this.state.nomDeChaine,
            language: this.state.language,
            date: Date.now(),
        }
        this.props.EnvoyerNouveauFilm(infoFilm)
        this.setState({
            etatFormulaire: true
        })
    }
    render() {
        if (this.state.etatFormulaire === true) {
            return (
                <div>
                    <div
                        className="modal fade "
                        id="ModalAjouterUnFilm"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un film <i className="fas fa-film"></i></h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className=""> Le film a bien été ajouté <i className="fas fa-check"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        } else {
            return (
                <div>
                    <div
                        className="modal fade "
                        id="ModalAjouterUnFilm"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un film <i className="fas fa-film"></i></h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <form onSubmit={this.createFilm}>
                                            <div className="form-outline m-2">
                                                <input onChange={this.handleChange} name='titre' type="text" id="titreFilmForm" className="form-control form-control-lg" />
                                                <label className="form-label" for="formControlLg">Titre</label>
                                            </div>
                                            <div className="form-outline m-2">
                                                <input onChange={this.handleChange} name='description' type="text" id="descriptionFilmForm" className="form-control form-control-lg" />
                                                <label className="form-label" for="formControlLg">Description</label>
                                            </div>
                                            <div className="form-outline m-2">
                                                <input onChange={this.handleChange} name='idYT' type="text" id="idYoutubeFilmForm" className="form-control form-control-lg" />
                                                <label className="form-label" for="formControlLg">idYoutube</label>
                                            </div>
                                            <div className="form-outline m-2">
                                                <input onChange={this.handleChange} name='nomDeChaine' type="text" id="nomDeChaineFilmForm" className="form-control form-control-lg" />
                                                <label className="form-label" for="formControlLg">Nom de Chaine</label>
                                            </div>
                                            <div className="m-3">
                                                <div onChange={this.handleChangeLanguage}>
                                                    <input className="m-1" type="radio" value="fr" name="language" /><i className="flag flag-france"></i>
                                                    <input className="m-1" type="radio" value="eng" name="language" /><i className="flag flag-united-kingdom"></i>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-dark m-2">Ajouter</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }
}

export default ModalFilm
