import React, {Component} from 'react';
import {connect} from "react-redux";
import AlbumsCard from "../../components/Cards/AlbumsCard/AlbumsCard";
import {getAlbums} from "../../store/actions/albumsActions";

class Albums extends Component {

    state = {
        artist: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getAlbums(id).then(() => {
            this.setState({
                artist:this.props.albums[0].artist.name
            })
        });
    }

    render() {
        return (
            this.props.albums && <div>
                <h1>{this.state.artist}</h1>
                {this.props.albums.map(album => (
                    <AlbumsCard
                        key={album._id}
                        name={album.name}
                        image={album.image}
                        year={album.year}
                        id={album._id}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    getAlbums: id => dispatch(getAlbums(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);