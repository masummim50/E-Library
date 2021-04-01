import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderedBook, setOrderedBook] = useState([]);
  const [spinner, setSpinner] = useState(false)
  useEffect(()=> {
    setSpinner(true)
    fetch(`https://strawberry-pie-28899.herokuapp.com/orders/${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => {
      setOrderedBook(data);
      setSpinner(false)
    })
  },[])
  return (
    <div className="container">

      

      <h2>you have ordered {orderedBook.length} books</h2>
      {spinner && <div className="text-center">
      <div className="spinner-border text-success" role="status">
            <span className="visually-hidden"></span>
        </div>
      </div> }
      {orderedBook.map(singleorder =>
        <li className="d-flex align-items-center mb-3 shadow p-2">
          <img style={{height:'150px'}}  src={singleorder.image} alt=""/>
          <div className="book-info d-flex m-2 flex-column">
            <h4 style={{margin:'0'}}>{singleorder.bookName}</h4>
            <p style={{margin:'0'}}>Author: {singleorder.author}</p>
            <p style={{margin:'0'}}>Cost: ${singleorder.bookPrice}</p>
            <p>Order placed on: {singleorder.orderDate}</p>
          </div>
          <button style={{marginLeft:'auto'}} className="btn h-50 btn-danger">Cancel Order</button>
        </li>)
      }
    </div>
  );
};

export default Orders;