import React, { useState } from 'react'
function FormsSeries(props) {
    const [inputFields, setInputFields] = useState([
        { titre: '', description: '', nomDeChaine: '', language: '', idYT: '', date: Date.now() },
    ])
    const [EtatFormSeries, setEtatFormSeries] = useState(false)
    const [titreDeLaSerie, settitreDeLaSerie] = useState('')

    const handleChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value
        setInputFields(values)
    }
    const handleChangeRadio = (index, event) => {
        const values = [...inputFields];
        values[index]['language'] = event.target.value
        setInputFields(values)
    }
    const handleChangeTitre = (event) => {
        const values = event.target.value;
        settitreDeLaSerie(values)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields)
        props.EnvoyerNouvelleSerie(inputFields, titreDeLaSerie)
        setEtatFormSeries(true)
    }
    const handleAddFields = () => {
        setInputFields([...inputFields, { titre: '', description: '', nomDeChaine: '', language: '', idYT: '', date: Date.now() }])
    }
    const handleRemoveFields = (index) => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)
    }
    if (EtatFormSeries === false) {
        return (
            <div>
                <div
                    className="modal fade "
                    id="ModalAjouterUneSerie"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter une Serie <i className="fas fa-film"></i></h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-mdb-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline m-2">
                                            <input onChange={handleChangeTitre} value={titreDeLaSerie} name='titreDeLaSerie' type="text" id="titreDeLaSerieForm" className="form-control form-control-lg" />
                                            <label className="form-label" for="formControlLg">Titre de la serie</label>
                                        </div>
                                        {
                                            inputFields.map((inputField, index) => (
                                                <div key={index} className="border-bottom">
                                                    <div className="form-outline m-2">
                                                        <input onChange={event => handleChange(index, event)} name='titre' value={inputField.titre} type="text" id={"titreSerieForm" + index} className="form-control form-control-lg" />
                                                        <label className="form-label" for="formControlLg">Titre</label>
                                                    </div>
                                                    <div className="form-outline m-2">
                                                        <input onChange={event => handleChange(index, event)} name='description' value={inputField.description} type="text" id={"descriptionSerieForm" + index} className="form-control form-control-lg" />
                                                        <label className="form-label" for="formControlLg">Description</label>
                                                    </div>
                                                    <div className="form-outline m-2">
                                                        <input onChange={event => handleChange(index, event)} name='idYT' type="text" value={inputField.idYT} id={"idYoutubeSerieForm" + index} className="form-control form-control-lg" />
                                                        <label className="form-label" for="formControlLg">idYoutube</label>
                                                    </div>
                                                    <div className="form-outline m-2">
                                                        <input onChange={event => handleChange(index, event)} name='nomDeChaine' value={inputField.nomDeChaine} type="text" id={"nomDeChaineSerieForm" + index} className="form-control form-control-lg" />
                                                        <label className="form-label" for="formControlLg">Nom de Chaine</label>
                                                    </div>
                                                    <div className="m-3" key={index}>
                                                        <div onChange={event => handleChangeRadio(index, event)}>
                                                            <input className="m-1" type="radio" value="fr" name={"language" + index} /><i className="flag flag-france"></i>
                                                            <input className="m-1" type="radio" value="eng" name={"language" + index} /><i className="flag flag-united-kingdom"></i>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button onClick={() => handleAddFields()} type="button" className="btn btn-dark m-2"><i className="fas fa-plus"></i></button>
                                                        <button onClick={() => handleRemoveFields(index)} type="button" className="btn btn-dark m-2"><i className="fas fa-minus"></i></button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <button type="submit" className="btn btn-dark m-2">Ajouter</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    } else {
        return (
            <div>
                <div
                    className="modal fade "
                    id="ModalAjouterUneSerie"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter une Serie <i className="fas fa-film"></i></h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-mdb-dismiss="modal"
                                    aria-label="Close"
                                ></button>

                            </div>
                            <div className="modal-body">
                                <p className="text-center">Serie envoyé</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormsSeries;