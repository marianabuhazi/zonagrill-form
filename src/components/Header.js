import logo from '/Users/marianabuhazi/zonagrill-form/src/images/logo.png'
import styled from 'styled-components'
import '/Users/marianabuhazi/zonagrill-form/src/index.css'

//Styled components
const Logo= styled.img`
  width:85vw;
  display:block;
  margin:auto;
  @media (min-width: 768px) {
    width:35rem;
  } 
  `
const EventName= styled.h2`
    text-align:center;
    font-family: 'IBM Plex Serif', serif;
    color:#3c2414;
    margin:2%;
    font-size: 4.5vw;
    @media (min-width: 768px) {
        font-size: 2rem;
  } 
`


const Header = (props) => {
    return (
        <div>
            <Logo src={logo} alt="Zona Grill logo" />
            <EventName>{props.name}</EventName>
        </div>
    )
}

export default Header;
