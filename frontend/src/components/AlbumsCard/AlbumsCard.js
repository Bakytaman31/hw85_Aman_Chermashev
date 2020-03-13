import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import MusicThumbnail from "../MusicThumbnail/MusicThumbnail";
import {Link} from "react-router-dom";


const AlbumsCard = (props) => {
    return (
        <div>
            <Card>
                <MusicThumbnail image={props.image}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.year}</CardText>
                    <Link to={`/tracks/${props.id}`}><Button>Tracks</Button></Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default AlbumsCard;