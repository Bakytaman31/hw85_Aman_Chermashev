import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                <img src={user.avatar} alt="User" style={{borderRadius: "50%", width: "40px", height: "40px"}}/>
                Hello, {user.displayName}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/addArtist" exact>Add Artist</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/addAlbum" exact>Add Album</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/addTrack" exact>Add Track</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/track_history" exact>Track History</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default UserMenu;