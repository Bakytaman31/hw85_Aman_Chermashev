import React, {Component} from 'react';
import {deleteTrack, getTracks, publishTrack} from "../../store/actions/tracksActions";
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
                if (this.props.tracks.length > 0) {
                    this.setState({
                        album: this.props.tracks[0].album.name
                    })
                } else {
                    this.setState({
                        album: 'Nothing yet'
                    })
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.album}</h1>
                {this.props.tracks.map(track => (
                    <div key={track._id}>
                        {
                            this.props.user.role === 'admin' ?
                            <TrackCard
                            id={track._id}
                            onClick={this.props.addTrackHistory}
                            status={track.published}
                            number={track.number}
                            name={track.name}
                            track={track.track}
                            duration={track.duration}
                            role={this.props.user.role}
                            delete={this.props.deleteTrack}
                            publish={this.props.publishTrack}
                            currentPageId={this.props.match.params.id}
                            /> : track.published === true &&
                                <TrackCard
                                id={track._id}
                                onClick={this.props.addTrackHistory}
                                number={track.number}
                                name={track.name}
                                track={track.track}
                                duration={track.duration}
                                role={this.props.user.role}
                            />
                        }
                    </div>
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
    addTrackHistory: track => dispatch(addTrackHistory(track)),
    deleteTrack: (id, currentPageId) => dispatch(deleteTrack(id, currentPageId)),
    publishTrack: (id, currentPageId) => dispatch(publishTrack(id, currentPageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);