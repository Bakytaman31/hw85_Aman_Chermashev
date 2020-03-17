// import React from 'react';
// import {
//     Navbar,
//     NavbarBrand
// } from 'reactstrap';
//
// const NavBar = () => {
//     return (
//         <div>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand href="/">Artists</NavbarBrand>
//             </Navbar>
//         </div>
//     );
// };
//
// export default NavBar;
import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand} from 'reactstrap';
import {useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Toolbar = () => {
    const user = useSelector(state => state.users.user);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Artists</NavbarBrand>

            <Nav className="ml-auto" navbar>
                {user ? (
                    <UserMenu user={user}/>
                ) : (
                    <AnonymousMenu/>
                )}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;