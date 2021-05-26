import React from 'react'
import styled from 'styled-components'
import '../fonts/index.css'

const Select= styled.h4`
    text-align:center;
    font-family: 'IBM Plex Serif', serif;
    font-size: 4vw;
    margin:1%;
    color:#00255c;
    @media (min-width: 768px) {
        text-align:left;
        font-size: 1.4rem;
  } 
`
const Link= styled.a`
    color:#dd4b39;
`


const Container= styled.div`
    display:flex;
    flex-direction: column;
    
`

const Instructions = () => {
    return (
        <Container >
            <Select>Please enter your name, then select 1 item from each category</Select>
            <Select>Check out our <Link href='http://zonagrill.us/menu.html'>menu</Link> and <Link href='http://zonagrill.us/gallery.html'>gallery</Link> for reference!</Select> 
        </Container>
    )
}

export default Instructions
