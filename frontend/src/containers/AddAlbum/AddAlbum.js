import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {postAlbum} from "../../store/actions/albumsActions";
import {getArtists} from "../../store/actions/artistsActions";
import FormElement from "../../components/UI/Form/FormElement";

class AddAlbum extends Component {
    state = {
        name: '',
        image: '',
        year: '',
        artist: ''
    };

    async componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        } else {
            await this.props.getArtists();
        }
    }

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });
        this.props.postAlbum(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };
    render() {
        const artistsOptions = this.props.artists.map(artist => ({title: artist.name, id: artist._id}));
        return (
            <>
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement
                        type="select"
                        propertyName="artist"
                        required
                        title="Artist"
                        value={this.state.artist}
                        options={artistsOptions}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="text"
                        propertyName="name"
                        required
                        placeholder="Enter album's name"
                        title="Name"
                        value={this.state.name}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="number"
                        propertyName="year"
                        required
                        placeholder="Enter year"
                        title="Year"
                        value={this.state.year}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="file"
                        propertyName="image"
                        title="Image"
                        onChange={this.fileChangeHandler}
                    />

                    <FormGroup row>
                        <Col sm={{offset:2, size: 10}}>
                            <Button type="submit" color="primary">Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    artists: state.artists.artists
});

const mapDispatchToProps = dispatch => ({
    postAlbum: album => dispatch(postAlbum(album)),
    getArtists: () => (dispatch(getArtists()))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);