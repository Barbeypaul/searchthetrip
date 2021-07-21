import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Info extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id={this.props.idInfo}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content bg-dark">
                        <div className="modal-header p-0">
                            <div className="img-wrapper">
                                <div className="img-overlay-close">
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-floating"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ><i className="fas fa-times"></i></button>
                                </div>
                                <img alt={this.props.titre} className="img-fluid rounded" src={"https://img.youtube.com/vi/" + this.props.idYT + "/maxresdefault.jpg"}></img>
                                <div className="img-overlay">
                                    <Link to={"/Play?id=" + this.props.idYT}> <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Regarder <i className="far fa-play-circle"></i></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title text-light" id="exampleModalLabel">{this.props.titre}</h5>
                            <p className="text-light">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Info
