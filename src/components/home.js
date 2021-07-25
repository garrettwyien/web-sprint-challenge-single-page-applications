import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import styled from 'styled-components';
import img from '../Pizza.jpg';
import Header from './header';

const StyledHome = styled.div`
display: flex;
flex-flow: column;
align-items: center;

header {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.order-container {
    width: 100%;
}
.logo {
    width: 100%;
    height: 60vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.order-container button {
    position: absolute;
    height: 5%;
    width: 20%;
    left: 40%;
    top: 35%;
    text-align: center;
    font-size: 1.6rem;
}
`

export default function Home(props) {
    return (
       <div>
        <Header />
        <StyledHome>
            <section className='order-container'>
                <div className='logo'>
                <Link to={`/pizza/`}>
                <button>Pizza</button>
                </Link>
                </div>
                
            </section>
        </StyledHome>
       </div> 
       
    );
};