import React, {Component} from 'react';
import {getTrackHistory} from "../../store/actions/trackHistoryActions";
import {connect} from "react-redux";
import TrackHistoryCard from "../../components/Cards/TrackHistoryCard/TrackHistoryCard";

class TrackHistory extends Component {
    componentDidMount() {
        if(!this.props.user){
            this.props.history.push('/login')
        } else {
            this.props.getTrackHistory();
        }
    }

    render() {
        return (
            <div>
                {this.props.trackHistory.map(track => (
                    <TrackHistoryCard
                        key={track._id}
                        date={track.date}
                        name={track.track.name}
                        album={track.track.album.name}
                        artist={track.track.album.artist.name}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    trackHistory: state.trackHistory.trackHistory,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    getTrackHistory: () => dispatch(getTrackHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);