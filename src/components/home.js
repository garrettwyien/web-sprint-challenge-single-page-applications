import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../Pizza.jpg';
import Header from './header';

const StyledHome = styled.div`
display: flex;
flex-flow: column;
align-items: center;

.order-container {
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
}
.logo {
    border: solid 3px black;
    width: 95%;
    height: 60vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.order-container a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    position: absolute;
    height: 5%;
    width: 15%;
    left: 40%;
    top: 35%;
    text-align: center;
    font-size: 1.6rem;
    color: black;
    background-color: white;
    border: solid 3px black;
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
`
export default function Home(props) {
    return (
       <div>
        <Header />
        <StyledHome>
            <section className='order-container'>
                <div className='logo'>
                <Link to={`/pizza/`} id='order-pizza'>
                Pizza!
                </Link>
                </div>    
            </section>
        </StyledHome>
       </div> 
       
    );
};