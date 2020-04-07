import React from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import TrackHistory from "./containers/TrackHistory/TrackHistory";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import AddArtist from "./containers/AddArtist/AddArtist";
import AddAlbum from "./containers/AddAlbum/AddAlbum";
import AddTrack from "./containers/AddTrack/AddTrack";
import Artist from "./containers/Artist/Artist";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Artists}/>
            <Route path="/registration" exact component={Registration}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/track_history" exact component={TrackHistory}/>
            <Route path="/addArtist" exact component={AddArtist}/>
            <Route path="/addAlbum" exact component={AddAlbum}/>
            <Route path="/addTrack" exact component={AddTrack}/>
            <Route path="/artist/:id" component={Artist}/>
            <Route path="/albums/:id" component={Albums}/>
            <Route path="/tracks/:id" component={Tracks}/>
        </Switch>
    );
};

export default Routes;