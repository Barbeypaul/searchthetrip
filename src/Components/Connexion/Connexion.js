import React, { Component } from 'react'
import LogoSite from '../logo/logo'
export class Connexion extends Component {
    render() {
        return (
            <div className="container">
                <div className='d-flex justify-content-center'>
                    <LogoSite></LogoSite>
                </div>
                <div className='row text-light text-center'>
                    <p>Utiliser un compte Google pour vous connecter</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={this.props.authenticate} className="row btn btn-dark">
                        <div>Connexion <i className="fab fa-google"></i></div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Connexion
