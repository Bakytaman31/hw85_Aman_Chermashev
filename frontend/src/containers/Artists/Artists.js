import React, {Component} from 'react';
import {connect} from "react-redux";
import {getArtists} from "../../store/actions/artistsActions";
import ArtistCard from "../../components/ArtistsCard/ArtistCard";

class Artists extends Component {

    componentDidMount() {
        this.props.getArtists();
    }

    render() {
        return (
            <div>
                {this.props.artists.map(artist => (
                    <ArtistCard
                        key={artist._id}
                        id={artist._id}
                        name={artist.name}
                        image={artist.image}
                        description={artist.info}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    getArtists: () => dispatch(getArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);