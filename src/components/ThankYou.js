import Header from './Header'
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Order from './Order' 

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
  const [user_name, setName]=useState()
  const [entree, setEntree]=useState()
  const [drink, setDrink]=useState()
  const [appetizer, setAppetizer]=useState()
  const [orderNum, setOrderNum]=useState()
  
  //console.log(id)
  const getUserOrder=()=>{ 
    fetch(`http://localhost:8080/api/get_order/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json', 
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
      setName(json.orderData.name)
      setOrderNum(json.orderData.order_num)
      setAppetizer(json.orderData.appetizer)
      setDrink(json.orderData.drink)
      setEntree(json.orderData.entree)
      //console.log(order)
    })
  }
    return (
      <div>
        <Header name="Thermofisher Corporate Event" />
        <ThankYouMess>Thank you, your order has been processed.</ThankYouMess>
        <Order user_name={user_name} orderNum={orderNum} entree={entree} drink={drink} appetizer={appetizer}/>

        
      </div>
    );
  }
  
  export default ThankYou;