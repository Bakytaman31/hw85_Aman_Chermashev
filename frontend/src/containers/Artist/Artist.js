import React, {Component} from 'react';
import {connect} from "react-redux";
import {getArtist} from "../../store/actions/artistsActions";
import MusicThumbnail from "../../components/MusicThumbnail/MusicThumbnail";

class Artist extends Component {
    componentDidMount() {
        this.props.getArtist(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.artist.name}</h1>
                <MusicThumbnail image={this.props.artist.image}/>
                <p>{this.props.artist.info}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artist: state.artists.artist
});

const mapDispatchToProps = dispatch => ({
    getArtist: id => dispatch(getArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);