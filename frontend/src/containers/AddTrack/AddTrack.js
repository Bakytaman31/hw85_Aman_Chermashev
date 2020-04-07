import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAlbumsForForm} from "../../store/actions/albumsActions";
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {postTrack} from "../../store/actions/tracksActions";

class AddTrack extends Component {
    state = {
        name: '',
        album: '',
        duration: '',
        track: ''
    };

    async componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login');
        } else {
            await this.props.getAlbumsForForm();
        }
    }

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });

        this.props.postTrack(formData);
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
        const albumsOptions = this.props.albums.map(album => ({title: album.name, id: album._id}));
        return (
            <>
                <Form onSubmit={this.submitFormHandler}>

                    <FormElement
                        type="select"
                        propertyName="album"
                        required
                        title="Album"
                        value={this.state.album}
                        options={albumsOptions}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="text"
                        propertyName="name"
                        required
                        placeholder="Enter track's name"
                        title="Name"
                        value={this.state.name}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="text"
                        propertyName="duration"
                        required
                        placeholder="Enter duration"
                        title="Duration"
                        value={this.state.duration}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="file"
                        propertyName="track"
                        title="Track"
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
    albums: state.albums.albums
});

const mapDispatchToProps = dispatch => ({
    getAlbumsForForm: () => dispatch(getAlbumsForForm()),
    postTrack: track => dispatch(postTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrack);