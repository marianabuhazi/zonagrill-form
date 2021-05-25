import Header from './components/Header'
import '/Users/marianabuhazi/zonagrill-form/src/index.css'
import Instructions from './components/Instructions'
import Form from './components/Form'
// import { useState } from "react"

function App() {
  // const [newOrderNum, setNewOrderNum]= useState("");
  let newOrderNum;
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
      console.log(newOrderNum);

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
            })
            .catch(error=>console.log(error));
    })
    .catch(error=>console.log(error));
  }

  // const [orders, setOrders]= useState([]);
  return (
    <div>
      <Header name="Thermofisher Corporate Event" />
      <Instructions/>
      <Form submitOrder={submitOrder}/>
    </div>
  );
}

export default App;
