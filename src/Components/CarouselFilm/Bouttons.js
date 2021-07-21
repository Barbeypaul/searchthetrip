import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export class Bouttons extends Component {
    state = {
        btnSaveEtat: false
    }
    handleSave = () => {
        if (this.state.btnSaveEtat === true) {
            this.setState({
                btnSaveEtat: false
            })
            this.props.EnvoyerSuppFavori(this.props.date, false)
        } else {
            this.setState({
                btnSaveEtat: true
            })
            this.props.EnvoyerSuppFavori(this.props.date, true)
        }
    }
    componentDidMount = () => {
        if (this.props.listeFavoris !== undefined) {
            if (this.props.listeFavoris[this.props.date] === true) {
                this.setState({
                    btnSaveEtat: true
                })
            } else {
                this.setState({
                    btnSaveEtat: false
                })
            }
        } else {
            this.setState({
                btnSaveEtat: false
            })
        }

    }
    render() {
        return (
            <Fragment key={this.props.keyFavoris}>
                <div key={this.props.keyFavoris} className="d-flex btn-group textSlide" role="group">
                    <Link to={"/Play?id=" + this.props.idYT}><button type="button" className="btn btn-dark"><i className="far fa-play-circle"></i></button></Link>
                    {
                        this.state.btnSaveEtat ?
                            <button key={this.props.keyFavoris} type="button" onClick={this.handleSave} value="true" className="btn btn-dark"><i className="fas fa-bookmark"></i></button>
                            :
                            <button key={this.props.keyFavoris} type="button" onClick={this.handleSave} value="false" className="btn btn-dark"><i className="far fa-bookmark"></i></button>
                    }
                    <button type="button" className="btn btn-dark  btn-block" data-mdb-toggle="modal" data-mdb-target={"#idInfo" + this.props.date}><i className="fas fa-info-circle"></i></button>
                </div>
            </Fragment >
        )
    }
}

export default Bouttons
