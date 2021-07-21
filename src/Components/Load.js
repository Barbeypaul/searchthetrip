import React, { Component } from 'react'

export class Load extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Load
