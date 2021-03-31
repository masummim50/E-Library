import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [content, setContent] = useState(false);
  const [book, setBook] = useState([])
  const {id}= useParams();
  console.log(id)
  useEffect(()=> {
    fetch(`http://localhost:5000/book/${id}`)
    .then(res => res.json())
    .then(data => {setBook(data); setContent(true)})
  },[])
  const handleCheckOut = (e)=> {
    let date = new Date();
    const {bookName, bookPrice, author, bookDescription, image} = book;
    const newOrder = {bookName, bookPrice, author, bookDescription, image, orderby: loggedInUser.email, orderDate: date.toDateString(), orderName: loggedInUser.name}
    console.log(newOrder);
    axios.post('http://localhost:5000/orders', newOrder)
    .then(res => {
      e.target.parentNode.parentNode.innerHTML = res.data
    })
  }
  return (
    <div className="text-center">
      <h2 className="text-left">Checkout</h2>
      {!content && <div className="spinner-border text-success" role="status">
            <span className="visually-hidden"></span>
        </div>}
      {content && 
    <div className="container p-5">
      <table className="table">
        <thead><tr className="text-center">
          <th scope="col">Book Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Author</th>
          </tr></thead>
          <tbody><tr style={{borderBottom:'1px solid black'}} className="text-center">
          <td scope="col">{book.bookName}</td>
          <td scope="col">1</td>
          <td scope="col">{book.author}</td>
          </tr></tbody>
          <tbody><tr className="text-center">
          <td scope="col">Total</td>
          <td></td>
          <td scope="col">${book.bookPrice}</td>
          </tr></tbody>
      </table>
      <div className="btn-container text-right w-100">
        <button onClick={handleCheckOut} className="btn btn-success">Checkout</button>
      </div>
    </div>}
    </div>
  );
};

export default Checkout;