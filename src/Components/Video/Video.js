import React, { Component } from 'react'

export class Video extends Component {
    render() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        return (
            <div className="">
                <div className="container-yt">
                    <iframe className="video-yt" frameBorder="0" src={"https://www.youtube.com/embed/" + params.id + "?rel=0&autoplay=1"} title="YouTube video player" frameborder="0" allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Video
