import React, { Component } from 'react'
import Logo from './surf.svg'
export class logo extends Component {
    render() {
        return (
            <div>
                <div className="navbar-brand mt-2 mt-lg-0 text-light">
                    <img
                        className="text-white"
                        src={Logo}
                        height="30"
                        alt="logo du site"
                        loading="lazy"
                    />
                </div>
            </div>
        )
    }
}

export default logo
