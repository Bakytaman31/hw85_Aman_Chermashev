import React, {Component} from 'react';
import {connect} from "react-redux";

import {deleteArtist, getArtists, publishArtist} from "../../store/actions/artistsActions";
import ArtistCard from "../../components/Cards/ArtistsCard/ArtistCard";
import './Artists.css';

class Artists extends Component {

    componentDidMount() {
        this.props.getArtists();
    }

    render() {
        return (
            <div className="artists">
                {this.props.artists.map(artist => (
                    <div key={artist._id} className="artist">
                        {(this.props.user && this.props.user.role === 'admin') ?
                            (<ArtistCard
                                key={artist._id}
                                id={artist._id}
                                status={artist.published}
                                role={this.props.user.role}
                                name={artist.name}
                                image={artist.image}
                                description={artist.info}
                                delete={this.props.deleteArtist}
                                publish={this.props.publishArtist}
                            />) : (artist.published &&
                                <ArtistCard
                                key={artist._id}
                                id={artist._id}
                                name={artist.name}
                                image={artist.image}
                                description={artist.info}
                            />)
                        }
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    getArtists: () => dispatch(getArtists()),
    deleteArtist: id => dispatch(deleteArtist(id)),
    publishArtist: id => dispatch(publishArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);