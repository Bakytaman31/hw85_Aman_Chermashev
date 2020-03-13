import React, {Component} from 'react';
import {getTracks} from "../../store/actions/tracksActions";
import {connect} from "react-redux";
import TrackCard from "../TrackCard/TrackCard";

class Tracks extends Component {
    state = {
        album: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getTracks(id).then(() => {
            this.setState({
                album: this.props.tracks[0].album.name
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.album}</h1>
                {this.props.tracks.map(track => (
                    <TrackCard
                        key={track._id}
                        number={track.number}
                        name={track.name}
                        duration={track.duration}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
    getTracks: id => dispatch(getTracks(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);