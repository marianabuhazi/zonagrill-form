import React from 'react'
import styled from 'styled-components'
import { useState } from "react"
import Header from './Header'
import Instructions from './Instructions'
import { useHistory } from "react-router-dom"


const Container=styled.div`
    display:flex;
    flex-direction:column;
    color:#3c2414;
    font-family: 'IBM Plex Serif', serif;
    margin:0% 5% 0% 5%;
    font-size:4vh;
    @media (max-width: 768px) {
        font-size: 3vh;
  }
`

const Question= styled.h5`
    border: solid 1px;
    border-radius:10px;
    padding:10px;
`

const Input=styled.input`
    display:block;
    margin:1%;
    width: 30vw;
`

const Select= styled.select`
    display:block;
    margin:1%;
    width: 30vw;
`
const Submit= styled.button`
    float:right;
    margin:5%;
    font-size:2vh;
    padding:2px;
`


const Form = ({setId}) => {
    let newOrderNum;
    let history= useHistory();

const submitOrder=(newName, newAppetizer, newEntree, newDrink, newComments)=>{ 
  fetch(`http://localhost:8080/api/get_orders_length`, {
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
  .then(response => response.json())
  .then(json => {
    newOrderNum=json.orderData +1;
    setId(newOrderNum);
    

    const newOrder={
      "order_num": newOrderNum, 
      "name":newName, 
      "appetizer": newAppetizer,
      "entree":newEntree,
      "drink":newDrink,
      "comments": newComments,
      "ready": false
    };
    console.log(newOrder)
        fetch(`http://localhost:8080/api/enter_order/`, {
            method: 'POST',
            body:JSON.stringify({order:newOrder}),
            headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
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
          .then(json=>{
          console.log(json);
          history.push("/confirmation");
          })
          .catch(error=>console.log(error));
  })
  .catch(error=>console.log(error));
}

    const [newName, setNewName]= useState("");
    const [newAppetizer, setNewAppetizer]= useState("");
    const [newEntree, setNewEntree]= useState("");
    const [newDrink, setNewDrink]= useState("");
    const [newComments, setNewComments]= useState("");


const onSubmit =(newOrder)=>{
    newOrder.preventDefault();
    if(newName==="" || newAppetizer==="" || newEntree==="" || newDrink===""){
        alert("Please fill out all required fields.")
    }
    else{
        submitOrder(newName, newAppetizer, newEntree, newDrink, newComments); 
    }
}
    return (
        <div>
        <Header name="Thermofisher Corporate Event"/>
        <Instructions/>
        <Container>
            <Question>* Enter your name: <Input type="text" placeholder="Name" value={newName} required onChange={(e)=>setNewName(e.target.value)}></Input>
            </Question>
            <Question>* 1.) Select one appetizer
                <Select onChange={(e)=>setNewAppetizer(e.target.value)}>
                    <option defaultValue=""></option>
                    <option value="None">None</option>
                    <option value="Hot Dog">Hot Dog</option>
                    <option value="Tequeños">Tequeños</option>
                </Select>
            </Question>
            <Question>* 2.) Select one entree
                <Select onChange={(e)=>setNewEntree(e.target.value)}>
                    <option defaultValue=""></option>
                    <option value="None">None</option>
                    <option value="Pepito">Pepito</option>
                    <option value="Arepa">Arepa</option>
                    <option value="Burger">Burger</option>
                    <option value="Cachapa">Cachapa</option>
                </Select>
            </Question>
            <Question onChange={(e)=>setNewDrink(e.target.value)}>* 3.) Select one drink
                <Select >
                    <option defaultValue=""></option>
                    <option value="None">None</option>
                    <option value="Frescolita">Frescolita (Bubble gum flavored)</option>
                    <option value="Coca Cola">Coca Cola</option>
                    <option value="Malta">Malta</option>
                    <option value="Sprite">Sprite</option>
                </Select>
            </Question>
            <Question>Comments for the chef: <Input type="text" placeholder="Comments" value={newComments} required onChange={(e)=>setNewComments(e.target.value)}></Input></Question>
            
        </Container>
        <Submit onClick={(newOrder)=>onSubmit(newOrder)}>Submit</Submit>
    </div>
    )
}


export default Form
