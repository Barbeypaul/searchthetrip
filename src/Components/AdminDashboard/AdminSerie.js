import React, { Component, Fragment } from 'react'
import FormsSeries from './ModalSerie'

export class AdminSerie extends Component {
    state = {
        radioCheckedSerie: this.props.idSerieALaUne.id
    }
    handleRemove = (event) => {
        console.log('on supprime')
        const id = event.target.value
        this.props.SupprimerUneSerie(id)
    }
    handleCheckedRadioSerie = (event) => {
        console.log('on check')
        const id = event.target.value
        this.props.EnvoyerSerieALaUne(id)
    }
    render() {
        console.log(this.props.Series)
        return (
            <div>
                <p className="text-light">Ajouter une Serie / Liste des Series</p>
                <div className="card">
                    <div className="card-header">
                        <button
                            type="button"
                            className="btn btn-dark"
                            data-mdb-toggle="modal"
                            data-mdb-target="#ModalAjouterUneSerie"
                        >Ajouter une Serie <i className="fas fa-film"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        {this.props.Series !== undefined ? <div>
                            <table className="table align-middle table-responsive table-wrapper " >
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Titre</th>
                                        <th scope="col">Nombre depisodes</th>
                                        <th scope="col">date</th>
                                        <th scope="col">langue</th>
                                        <th scope="col">idYT</th>
                                        <th scope="col">Chaine</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Serie a la une</th>
                                        <th scope="col">Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {Object.keys(this.props.Series).map(key => {
                                        return (
                                            <Fragment key={key}>
                                                <tr>
                                                    <th scope="row">{key}</th>
                                                    <td>{this.props.Series[key].infoSerie[1].titre}</td>
                                                    <td>{this.props.Series[key].infoSerie.length}</td>
                                                    <td>{this.props.Series[key].infoSerie[1].date}</td>
                                                    <td>{this.props.Series[key].infoSerie[1].language === "eng" ? <i className="flag flag-united-kingdom"></i> : <i className="flag flag-france"></i>}</td>
                                                    <td>{this.props.Series[key].infoSerie[1].idYT}</td>
                                                    <td>{this.props.Series[key].infoSerie[1].nomDeChaine}</td>

                                                    <td><img alt={this.props.Series[key].infoSerie.titre} className="imgSlide" height="50px" src={"https://img.youtube.com/vi/" + this.props.Series[key].infoSerie[1].idYT + "/maxresdefault.jpg"} /></td>
                                                    <td>
                                                        {
                                                            this.state.radioCheckedSerie === key ?
                                                                < input defaultChecked onClick={this.handleCheckedRadioSerie} className="m-1" type="radio" name="radioNoLabel" value={key} />
                                                                :
                                                                <input onClick={this.handleCheckedRadioSerie} className="m-1" type="radio" name="radioNoLabel" value={key} />
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
                            <p>Aucune serie ajouté</p>
                        </div>}
                    </div>
                </div>
                <FormsSeries EnvoyerNouvelleSerie={this.props.EnvoyerNouvelleSerie}></FormsSeries>
            </div>
        )
    }
}

export default AdminSerie
