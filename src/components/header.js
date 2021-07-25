import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
flex-flow: column;
align-items: center;

header {
    height: 8vh;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.name {
    color: red;
    text-align: center;
    margin-left: 3%;
}
nav {
    width: 30%;
    display:flex;
    justify-content:space-around;
    align-items: center;
    margin-right: 3%;
}
nav a {
    display: flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
    width: 50%;
    height: 50%;
    color: black;
    c
    background-color: white;
    :hover {
    background-color: black;
    color: white;
    transition: .5s;
    }
    :active {
    background-color: black;
    color: white;
    }
}
/* nav a.active {
    background-color: black;
    color: white;
} */
}
`

export default function Header(props) {
    return (
        <StyledHeader>
            <header>
                <div className='name'>
                    <h2>Lambda Eats</h2>
                </div>
                <nav>
                    <NavLink to={`/`}>
                        Home
                    </NavLink>
                    <NavLink to={`/help`}>
                        Help
                    </NavLink>
                </nav>
            </header>
        </StyledHeader>
    )};