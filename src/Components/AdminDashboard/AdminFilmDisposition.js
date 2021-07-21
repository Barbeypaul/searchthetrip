import React, { Component, Fragment } from 'react'

export class AdminFilmDisposition extends Component {
    state = {
        1: this.props.Top10List[1],
        2: this.props.Top10List[2],
        3: this.props.Top10List[3],
        4: this.props.Top10List[4],
        5: this.props.Top10List[5],
        6: this.props.Top10List[6],
        7: this.props.Top10List[7],
        8: this.props.Top10List[8],
        9: this.props.Top10List[9],
        10: this.props.Top10List[10],
    }
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
        this.props.ModifierTop10Film(name, value)
    }
    render() {

        return (
            <div>
                <p className="text-light mt-3">Top 10</p>
                <div className="card">
                    <div className="card-body">
                        <table className="table table-wrapper ">
                            <thead>
                                <tr>
                                    <th scope="col">Top</th>
                                    <th scope="col">Choisir un Film (id du Film)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.props.Top10List).map(key => {
                                    return (
                                        <Fragment key={key}>
                                            <tr >
                                                <th scope="row">{key}</th>
                                                <td>
                                                    <div className="form-outline">
                                                        <input onChange={this.handleChange} type="text" id={key} className="form-control" name={key} value={this.state[key]} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminFilmDisposition
