import React, { Component } from 'react'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <div style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div className='row text-light text-center'>
                        <p>Page erreur 404: désolé, cette page n'existe pas</p>
                    </div>
                    <div className='row text-light text-center'>
                        <p><i className="fas fa-exclamation-triangle"></i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound
