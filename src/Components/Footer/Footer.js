import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <a target="_blank" className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/paul-barbey-31b8481aa/" role="button"><i className="fab fa-linkedin-in"></i ></a>
                        </section>
                    </div>
                    <div className="text-center p-3">
                        Site développé par Paul Barbey
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
