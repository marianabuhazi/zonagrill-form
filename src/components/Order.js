import React from 'react'
import styled from 'styled-components'

const Receipt= styled.h5`
    color:#3c2414;
    margin:0;
    font-size:4vh;
    text-align:center;
    @media (max-width: 768px) {
        font-size: 3vh;
  }
    
`
const ReceiptItems= styled.li`
    list-style-type:none;
    font-size:2.5vh;
    @media (max-width: 768px) {
        font-size: 2vh;
  }
  margin:3%;
`



const Border=styled.div`
    border:solid #3c2414 1px;
    width:55%;
    margin:auto;
`

const Underline=styled.span`
    text-decoration:underline;
`

const Order = ({user_name,orderNum,appetizer,entree,drink}) => {
    return (
        <Border>
            <Receipt>Receipt</Receipt>
                <ReceiptItems><Underline>Name:</Underline>{user_name} </ReceiptItems>
                <ReceiptItems><Underline>Order Number:</Underline>{orderNum} </ReceiptItems>
                <ReceiptItems><Underline>Appetizer:</Underline>{appetizer}</ReceiptItems> 
                <ReceiptItems><Underline>Entree:</Underline>{entree} </ReceiptItems>
                <ReceiptItems><Underline>Drink:</Underline> {drink} </ReceiptItems>
        </Border>
    )
}

export default Order
