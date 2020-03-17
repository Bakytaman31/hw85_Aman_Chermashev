import React, {Component} from 'react';
import {getTracks} from "../../store/actions/tracksActions";
import {connect} from "react-redux";
import TrackCard from "../../components/Cards/TrackCard/TrackCard";
import {addTrackHistory} from "../../store/actions/trackHistoryActions";

class Tracks extends Component {
    state = {
        album: ''
    };

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        } else {
            const id = this.props.match.params.id;
            this.props.getTracks(id).then(() => {
                this.setState({
                    album: this.props.tracks[0].album.name
                })
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.album}</h1>
                {this.props.tracks.map(track => (
                    <TrackCard
                        key={track._id}
                        id={track._id}
                        onClick={this.props.addTrackHistory}
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
    tracks: state.tracks.tracks,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    getTracks: id => dispatch(getTracks(id)),
    addTrackHistory: track => dispatch(addTrackHistory(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);