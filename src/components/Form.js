import React from 'react'
import styled from 'styled-components'


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

let order={
    "name":"",
    "appetizer":"",
    "entree":"",
    "drink":"",
    "comments":""

}

let createOrder=()=>{
    if(order.name==="" || order.appetizer==="" || order.entree==="" || order.drink===""){
        alert("Please fill out all required fields.")
    }
    console.log(order)
}


const Form = () => {
    return (
        <div>
        <Container>
            <Question>* Enter your name: <Input type="text" placeholder="Name" required onChange={(e)=>order.name=e.target.value}></Input>
            </Question>
            <Question>* 1.) Select one appetizer
                <Select onChange={(e)=>order.appetizer=e.target.value}>
                    <option defaultValue="None">None</option>
                    <option value="Hot Dog">Hot Dog</option>
                    <option value="Tequeños">Tequeños</option>
                </Select>
            </Question>
            <Question>* 2.) Select one entree
                <Select onChange={(e)=>order.entree=e.target.value}>
                    <option  defaultValue="None">None</option>
                    <option value="Pepito">Pepito</option>
                    <option value="Arepa">Arepa</option>
                    <option value="Burger">Burger</option>
                    <option value="Cachapa">Cachapa</option>
                </Select>
            </Question>
            <Question onChange={(e)=>order.drink=e.target.value}>* 3.) Select one drink
                <Select >
                    <option  defaultValue="None">None</option>
                    <option value="Frescolita">Frescolita (Bubble gum flavored)</option>
                    <option value="Coca Cola">Coca Cola</option>
                    <option value="Malta">Malta</option>
                    <option value="Sprite">Sprite</option>
                </Select>
            </Question>
            <Question>Comments for the chef: <Input type="text" placeholder="Comments" required onChange={(e)=>order.comments=e.target.value}></Input></Question>
            
        </Container>
        <Submit onClick={createOrder}>Submit</Submit>
    </div>
    )
}

export default Form
