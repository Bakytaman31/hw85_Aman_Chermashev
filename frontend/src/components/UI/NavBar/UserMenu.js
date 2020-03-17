import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.username}!
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/track_history" exact>Track History</NavLink>
                    </NavItem>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default UserMenu;