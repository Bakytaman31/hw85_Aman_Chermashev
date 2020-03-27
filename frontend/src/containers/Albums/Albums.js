import React, {Component} from 'react';
import {connect} from "react-redux";
import AlbumsCard from "../../components/Cards/AlbumsCard/AlbumsCard";
import {deleteAlbum, getAlbums, publishAlbum} from "../../store/actions/albumsActions";

class Albums extends Component {

    state = {
        artist: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getAlbums(id).then(() => {
            if (this.props.albums.length > 0) {
                this.setState({
                    artist:this.props.albums[0].artist.name
                })
            } else {
                this.setState({
                    artist: 'Nothing yet'
                })
            }
        });
    }

    render() {
        return (
            this.props.albums && <div>
                <h1>{this.state.artist}</h1>
                {this.props.albums.map(album => (
                    <div key={album._id}>
                        {(this.props.user && this.props.user.role === 'admin') ?
                            (<AlbumsCard
                                    id={album._id}
                                    name={album.name}
                                    image={album.image}
                                    status={album.published}
                                    role={this.props.user.role}
                                    year={album.year}
                                    currentPageId={this.props.match.params.id}
                                    delete={this.props.deleteAlbum}
                                    publish={this.props.publishAlbum}
                                />) :
                            (album.published && <AlbumsCard
                                    id={album._id}
                                    name={album.name}
                                    image={album.image}
                                    year={album.year}
                                /> )
                        }
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    getAlbums: id => dispatch(getAlbums(id)),
    deleteAlbum: (id, currentPageId) => dispatch(deleteAlbum(id, currentPageId)),
    publishAlbum: (id, currentPageId) => dispatch(publishAlbum(id, currentPageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);