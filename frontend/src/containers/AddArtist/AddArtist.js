import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {connect} from "react-redux";
import {postArtist} from "../../store/actions/artistsActions";

class AddArtist extends Component {
    state = {
        name: '',
        image: '',
        info: ''
    };

    componentDidMount() {
        if (!this.props.user) this.props.history.push('/login');
    }

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            let value = this.state[key];

            formData.append(key, value);
        });
        this.props.postArtist(formData);
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
        return (
            <>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        type="text"
                        propertyName="name"
                        required
                        placeholder="Enter artist's name"
                        title="Name"
                        value={this.state.name}
                        onChange={this.inputChangeHandler}
                    />

                    <FormElement
                        type="textarea"
                        propertyName="info"
                        title="Info"
                        placeholder="Enter artist's info"
                        value={this.state.info}
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

const mapSTateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    postArtist: artist => dispatch(postArtist(artist))
});

export default connect(mapSTateToProps, mapDispatchToProps)(AddArtist);