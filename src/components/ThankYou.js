import Header from './Header'
import styled from 'styled-components';
import {useEffect} from 'react';

const ThankYouMess=styled.h4`
    text-align:center;
    font-family: 'IBM Plex Serif', serif;
    font-size: 4vw;
    margin:5%;
    color:#00255c;
    @media (min-width: 768px) {
        text-align:center;
        font-size: 1.4rem;
  } 
`


function ThankYou({id}) {
  useEffect(() => getUserOrder());
  let orderNum= id;
  const getUserOrder=()=>{ 
    fetch(`http://localhost:8080/api/get_order/${orderNum}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }
    })
    .then(response=> {
      if(response.status>= 200 && response.status<300){
        return response;
      }
      const error= new Error(`HTTP Error ${response.statusText}`);
      error.status=response.statusText;
      error.response=response;
      console.log(error);
      throw error;
    })
     .then(response=>response.json())
    .then(json => {
      console.log(json);
    })
  }
    return (
      <div>
        <Header name="Thermofisher Corporate Event" />
        <ThankYouMess>Thank you, your order has been processed.</ThankYouMess>


        
      </div>
    );
  }
  
  export default ThankYou;