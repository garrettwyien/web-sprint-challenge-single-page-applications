import React from 'react';
import styled from 'styled-components';
import img from '../Pizza.jpg';
import Header from './header';

const StyledConfirmation = styled.div`
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
    display:flex;
    justify-content:center;
    align-items: center;
    border: solid 3px black;
    width: 95%;
    height: 60vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.order-container h2 {
    position: absolute;
    text-align: center;
    font-size: 2.5rem;
    color: white;
}
`

export default function Confirmation(props) {
    return (
       <div>
        <Header />
        <StyledConfirmation>
            <section className='order-container'>
                <div className='logo'>
                <h2>Congrats! Pizza is on its way!</h2>
                </div>    
            </section>
        </StyledConfirmation>
       </div> 
       
    );
};